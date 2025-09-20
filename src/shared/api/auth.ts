import { ApiError, apiRequest } from "./httpClient";

export interface LoginPayload {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginResponse {
  accessToken?: string;
  refreshToken?: string;
  tokenType?: string;
  expiresIn?: number;
  [key: string]: unknown;
}

export interface RegisterPayload {
  email: string;
  password: string;
  confirmPassword?: string;
  acceptTerms?: boolean;
}

export interface RegisterResponse {
  id?: string;
  email?: string;
  [key: string]: unknown;
}

export interface RefreshTokenResponse {
  accessToken?: string;
  refreshToken?: string;
  tokenType?: string;
  expiresIn?: number;
  [key: string]: unknown;
}

export const login = async (payload: LoginPayload): Promise<LoginResponse> =>
  apiRequest<LoginResponse, LoginPayload>("/login", {
    method: "POST",
    body: payload,
  });

export const register = async (payload: RegisterPayload): Promise<RegisterResponse> =>
  apiRequest<RegisterResponse, RegisterPayload>("/register", {
    method: "POST",
    body: payload,
  });

export const refreshToken = async (): Promise<RefreshTokenResponse> =>
  apiRequest<RefreshTokenResponse>("/token/refresh", {
    method: "POST",
  });

export const logout = async (): Promise<void> => {
  try {
    await apiRequest<void>("/logout", { method: "POST" });
  } catch (error) {
    if (error instanceof ApiError && error.status === 401) {
      return;
    }
    throw error;
  }
};

export { ApiError };
