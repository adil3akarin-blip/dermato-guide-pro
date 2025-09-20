const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? "/api").replace(/\/$/, "");

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface RequestOptions<TBody = unknown> {
  method?: HttpMethod;
  body?: TBody;
  headers?: HeadersInit;
  signal?: AbortSignal;
  credentials?: RequestCredentials;
}

export class ApiError<T = unknown> extends Error {
  public readonly status: number;
  public readonly data: T | null;

  constructor(message: string, status: number, data: T | null) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

function isFormData(body: unknown): body is FormData | URLSearchParams {
  return body instanceof FormData || body instanceof URLSearchParams;
}

function isBlob(body: unknown): body is Blob {
  return body instanceof Blob;
}

function isArrayBuffer(body: unknown): body is ArrayBuffer {
  return body instanceof ArrayBuffer;
}

function isTypedArray(body: unknown): body is ArrayBufferView {
  return ArrayBuffer.isView(body);
}

type SerializableBody = Record<string, unknown> | unknown[];

const isSerializable = (body: unknown): body is SerializableBody => {
  if (body === null) return false;
  if (Array.isArray(body)) return true;
  return typeof body === "object";
};

interface ApiResponse<T> {
  data: T | null;
  raw: Response;
}

async function parseResponse<T>(response: Response): Promise<ApiResponse<T>> {
  const contentType = response.headers.get("content-type");

  if (contentType && contentType.includes("application/json")) {
    const data = (await response.json()) as T;
    return { data, raw: response };
  }

  if (contentType && contentType.includes("text/")) {
    const data = (await response.text()) as unknown as T;
    return { data, raw: response };
  }

  return { data: null, raw: response };
}

export async function apiRequest<TResponse, TBody = unknown>(
  endpoint: string,
  { method = "GET", body, headers, signal, credentials = "include" }: RequestOptions<TBody> = {}
): Promise<TResponse> {
  const url = `${API_BASE_URL}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;

  const fetchHeaders = new Headers(headers);
  let requestBody: BodyInit | undefined;

  if (body !== undefined && body !== null) {
    if (isFormData(body) || isBlob(body) || isArrayBuffer(body) || isTypedArray(body)) {
      requestBody = body as BodyInit;
    } else if (typeof body === "string") {
      requestBody = body;
      if (!fetchHeaders.has("Content-Type")) {
        fetchHeaders.set("Content-Type", "text/plain;charset=UTF-8");
      }
    } else if (isSerializable(body)) {
      requestBody = JSON.stringify(body);
      if (!fetchHeaders.has("Content-Type")) {
        fetchHeaders.set("Content-Type", "application/json");
      }
    } else {
      requestBody = body as BodyInit;
    }
  }

  const response = await fetch(url, {
    method,
    body: requestBody,
    headers: fetchHeaders,
    signal,
    credentials,
  });

  const { data } = await parseResponse<TResponse>(response);

  if (!response.ok) {
    let message = response.statusText || "Request failed";

    if (data && typeof data === "object") {
      const possibleMessage =
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (data as any).message ?? (data as any).detail ?? (data as any).error;
      if (typeof possibleMessage === "string" && possibleMessage.trim().length > 0) {
        message = possibleMessage;
      }
    } else if (typeof data === "string" && data.trim().length > 0) {
      message = data;
    }

    throw new ApiError(message, response.status, data);
  }

  return data as TResponse;
}
