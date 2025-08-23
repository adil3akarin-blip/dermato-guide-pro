import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  Camera, 
  FileText, 
  History, 
  Settings, 
  User, 
  AlertTriangle, 
  CheckCircle,
  Download,
  Share2,
  Calendar
} from "lucide-react";

const Dashboard = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    if (!agreedToTerms) {
      alert("Пожалуйста, подтвердите согласие с условиями анализа");
      return;
    }
    
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 3000);
  };

  const mockResults = [
    {
      condition: "Акне (угревая болезнь)",
      probability: 85,
      severity: "Средняя степень",
      isRisk: false
    },
    {
      condition: "Себорейный дерматит",
      probability: 45,
      severity: "Легкая степень",
      isRisk: false
    },
    {
      condition: "Гиперпигментация",
      probability: 30,
      severity: "Локальная",
      isRisk: false
    }
  ];

  const mockHistory = [
    {
      date: "2024-01-15",
      result: "Акне, средняя степень",
      status: "completed"
    },
    {
      date: "2024-01-10",
      result: "Сухость кожи",
      status: "completed"
    },
    {
      date: "2024-01-05",
      result: "Норма",
      status: "completed"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-foreground">Анна Иванова</h1>
                <p className="text-sm text-muted-foreground">Личный кабинет</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="analysis" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="analysis" className="flex items-center space-x-2">
              <Camera className="w-4 h-4" />
              <span>Анализ</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center space-x-2">
              <History className="w-4 h-4" />
              <span>История</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>Настройки</span>
            </TabsTrigger>
          </TabsList>

          {/* Analysis Tab */}
          <TabsContent value="analysis" className="space-y-6">
            {/* Consent Warning */}
            <Card className="border-warning bg-warning/5">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5" />
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground mb-2">Важная информация</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Результаты анализа носят справочный характер и не заменяют консультацию врача-дерматолога. 
                      При обнаружении подозрительных образований обязательно обратитесь к специалисту.
                    </p>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                        className="rounded border-border text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-foreground">
                        Подтверждаю, что ознакомлен(а) с ограничениями анализа
                      </span>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upload Section */}
            {!uploadedImage && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Upload className="w-5 h-5" />
                    <span>Загрузка фотографии</span>
                  </CardTitle>
                  <CardDescription>
                    Для точного анализа следуйте рекомендациям по съемке
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Instructions */}
                  <div className="bg-accent/10 rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-3">Инструкции для съемки:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Хорошее естественное освещение</li>
                      <li>• Расстояние 15-20 см от кожи</li>
                      <li>• Четкий фокус, без размытия</li>
                      <li>• Без фильтров и обработки</li>
                      <li>• Кожа должна быть чистой</li>
                    </ul>
                  </div>

                  {/* Upload Area */}
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                    <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-lg font-medium text-foreground mb-2">
                      Загрузите фото или сделайте снимок
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Поддерживаются форматы: JPG, PNG, HEIC (макс. 10 МБ)
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button variant="hero" className="relative">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <Upload className="w-4 h-4 mr-2" />
                        Выбрать файл
                      </Button>
                      <Button variant="soft" className="relative">
                        <input
                          type="file"
                          accept="image/*"
                          capture="environment"
                          onChange={handleImageUpload}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <Camera className="w-4 h-4 mr-2" />
                        Сделать фото
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Image Preview & Analysis */}
            {uploadedImage && !showResults && (
              <Card>
                <CardHeader>
                  <CardTitle>Предварительный просмотр</CardTitle>
                  <CardDescription>
                    Проверьте качество изображения перед анализом
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="relative">
                    <img
                      src={uploadedImage}
                      alt="Uploaded skin"
                      className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                    />
                  </div>

                  {isAnalyzing ? (
                    <div className="text-center space-y-4">
                      <div className="skeleton w-full h-2 rounded-full"></div>
                      <p className="text-muted-foreground">Анализируем изображение...</p>
                      <p className="text-sm text-muted-foreground">Это займет около 30 секунд</p>
                    </div>
                  ) : (
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button onClick={handleAnalyze} variant="hero" size="lg">
                        Анализировать
                      </Button>
                      <Button 
                        onClick={() => setUploadedImage(null)} 
                        variant="outline"
                      >
                        Загрузить другое фото
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Results */}
            {showResults && (
              <div className="space-y-6">
                {/* Analysis Results */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="w-5 h-5" />
                      <span>Результаты анализа</span>
                    </CardTitle>
                    <CardDescription>
                      Обнаруженные состояния кожи с вероятностью
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mockResults.map((result, index) => (
                      <div key={index} className="border border-border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-foreground">{result.condition}</h4>
                          <Badge variant={result.probability > 70 ? "default" : "secondary"}>
                            {result.probability}%
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Степень тяжести: {result.severity}
                        </p>
                        <Progress value={result.probability} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Recommendations */}
                <Card>
                  <CardHeader>
                    <CardTitle>Рекомендации по лечению</CardTitle>
                    <CardDescription>
                      Персонализированные советы по уходу за кожей
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* OTC Recommendations */}
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Безрецептурные средства:</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>• Салициловая кислота 1-2% (очищающие средства, тоники)</p>
                        <p>• Бензоил пероксид 2.5% (точечно на воспаления)</p>
                        <p>• Увлажняющий крем с церамидами (ежедневно)</p>
                        <p>• Солнцезащитный крем SPF 30+ (обязательно)</p>
                      </div>
                    </div>

                    {/* Prescription */}
                    <div className="bg-accent/10 rounded-lg p-4">
                      <h4 className="font-medium text-foreground mb-2">Рецептурные опции:</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        При отсутствии улучшений рассмотрите консультацию для назначения:
                      </p>
                      <p className="text-sm text-muted-foreground">
                        • Топические ретиноиды<br/>
                        • Антибиотики (при воспалительных формах)
                      </p>
                      <div className="mt-3 p-3 bg-warning/10 rounded border border-warning/20">
                        <p className="text-sm text-warning-foreground">
                          ⚠️ Обязательно обратитесь к дерматологу для назначения рецептурных препаратов
                        </p>
                      </div>
                    </div>

                    {/* Care Routine */}
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Режим ухода:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="border border-border rounded-lg p-4">
                          <h5 className="font-medium text-sm text-foreground mb-2">Утром:</h5>
                          <ol className="text-sm text-muted-foreground space-y-1">
                            <li>1. Мягкое очищение</li>
                            <li>2. Увлажняющий крем</li>
                            <li>3. Солнцезащитный крем</li>
                          </ol>
                        </div>
                        <div className="border border-border rounded-lg p-4">
                          <h5 className="font-medium text-sm text-foreground mb-2">Вечером:</h5>
                          <ol className="text-sm text-muted-foreground space-y-1">
                            <li>1. Очищение</li>
                            <li>2. Салициловая кислота</li>
                            <li>3. Увлажняющий крем</li>
                          </ol>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                      <Button variant="medical">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Сохранить в историю
                      </Button>
                      <Button variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Скачать PDF
                      </Button>
                      <Button variant="outline">
                        <Share2 className="w-4 h-4 mr-2" />
                        Поделиться с врачом
                      </Button>
                      <Button variant="hero">
                        <Calendar className="w-4 h-4 mr-2" />
                        Консультация дерматолога
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>История анализов</CardTitle>
                <CardDescription>
                  Ваши предыдущие результаты анализа кожи
                </CardDescription>
              </CardHeader>
              <CardContent>
                {mockHistory.length > 0 ? (
                  <div className="space-y-4">
                    {mockHistory.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                        <div>
                          <p className="font-medium text-foreground">{item.result}</p>
                          <p className="text-sm text-muted-foreground">{item.date}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Открыть
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <History className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-lg font-medium text-foreground mb-2">История пуста</p>
                    <p className="text-muted-foreground">Пройдите первый анализ, чтобы начать отслеживать состояние кожи</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Настройки</CardTitle>
                <CardDescription>
                  Управление профилем и данными
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium text-foreground mb-4">Язык интерфейса</h4>
                  <select className="w-full p-2 border border-border rounded-md bg-background">
                    <option value="ru">Русский</option>
                    <option value="kz">Қазақша</option>
                    <option value="en">English</option>
                  </select>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-4">Уведомления</h4>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded border-border" />
                      <span className="text-sm text-foreground">Email-напоминания о повторных анализах</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm text-foreground">Новости и обновления продукта</span>
                    </label>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="font-medium text-foreground mb-4">Управление данными</h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full sm:w-auto">
                      Экспортировать данные
                    </Button>
                    <Button variant="destructive" className="w-full sm:w-auto">
                      Удалить все данные
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;