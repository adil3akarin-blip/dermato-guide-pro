import { useState, useRef } from 'react';
import { Button, Card, Progress } from '@/shared/ui';

interface ImageUploadProps {
  onUpload: (file: File) => void;
  isAnalyzing?: boolean;
  progress?: number;
}

const ImageUpload = ({ onUpload, isAnalyzing = false, progress = 0 }: ImageUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      onUpload(file);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">Загрузка фотографии</h3>
          <p className="text-sm text-muted-foreground">
            Для точного анализа следуйте рекомендациям по съёмке
          </p>
        </div>

        <div className="bg-medical-bg/30 p-4 rounded-lg space-y-2">
          <h4 className="font-medium text-sm">Инструкции для качественного фото:</h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Хорошее естественное освещение</li>
            <li>• Фокус на проблемной области</li>
            <li>• Без фильтров и обработки</li>
            <li>• Расстояние 15-30 см от кожи</li>
          </ul>
        </div>

        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer
            ${dragActive ? 'border-primary bg-primary/5' : 'border-muted hover:border-primary/50'}
            ${isAnalyzing ? 'pointer-events-none opacity-50' : ''}
          `}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          {previewUrl ? (
            <div className="space-y-4">
              <img 
                src={previewUrl} 
                alt="Preview" 
                className="max-w-full max-h-48 mx-auto rounded-lg"
              />
              {!isAnalyzing && (
                <Button variant="outline" size="sm">
                  Выбрать другое фото
                </Button>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="w-16 h-16 bg-medical-accent/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">📷</span>
              </div>
              <div>
                <p className="font-medium">Нажмите или перетащите фото сюда</p>
                <p className="text-sm text-muted-foreground">PNG, JPG до 10MB</p>
              </div>
            </div>
          )}
        </div>

        {isAnalyzing && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Анализ изображения...</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />

        {previewUrl && !isAnalyzing && (
          <Button 
            className="w-full"
            onClick={() => {
              // Trigger analysis
            }}
          >
            Анализировать
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ImageUpload;