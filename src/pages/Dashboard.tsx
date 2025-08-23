import { useState } from 'react';
import { Button, Card, CardContent, CardHeader, CardTitle, Badge, Progress, Tabs, TabsContent, TabsList, TabsTrigger, Checkbox } from "@/shared/ui";
import ImageUpload from "@/features/image-upload/ui/ImageUpload";
import type { AnalysisResult } from "@/entities/analysis/model/types";
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
  const [currentAnalysis, setCurrentAnalysis] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Mock data - replace with real API calls
  const [analyses, setAnalyses] = useState<AnalysisResult[]>([
    {
      id: '1',
      date: '2024-01-15',
      imageUrl: '/placeholder.svg',
      status: 'completed',
      conditions: [
        {
          name: 'Акне средней степени',
          confidence: 87,
          severity: 'moderate',
          description: 'Воспалительные элементы на лице',
          requiresDoctorVisit: false
        }
      ],
      recommendations: []
    }
  ]);

  const handleImageUpload = (file: File) => {
    if (!agreedToTerms) {
      alert("Пожалуйста, подтвердите согласие с условиями анализа");
      return;
    }
    
    setIsAnalyzing(true);
    setUploadProgress(0);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          // Mock analysis result
          setCurrentAnalysis({
            id: Date.now().toString(),
            date: new Date().toISOString().split('T')[0],
            imageUrl: URL.createObjectURL(file),
            status: 'completed',
            conditions: [
              {
                name: 'Акне (угревая болезнь)',
                confidence: 85,
                severity: 'moderate',
                description: 'Воспалительные и невоспалительные элементы',
                requiresDoctorVisit: false
              }
            ],
            recommendations: [
              {
                category: 'otc',
                title: 'Безрецептурные средства',
                description: 'Рекомендуемые препараты для домашнего ухода',
                instructions: [
                  'Салициловая кислота 1-2%',
                  'Бензоил пероксид 2.5%',
                  'Увлажняющий крем с церамидами'
                ]
              }
            ]
          });
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

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
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        checked={agreedToTerms}
                        onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                      />
                      <span className="text-sm text-foreground">
                        Подтверждаю, что ознакомлен(а) с ограничениями анализа
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upload Section */}
            <ImageUpload 
              onUpload={handleImageUpload}
              isAnalyzing={isAnalyzing}
              progress={uploadProgress}
            />

            {/* Results */}
            {currentAnalysis && (
              <div className="space-y-6">
                {/* Analysis Results */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="w-5 h-5" />
                      <span>Результаты анализа</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {currentAnalysis.conditions.map((condition, index) => (
                      <div key={index} className="border border-border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-foreground">{condition.name}</h4>
                          <Badge variant={condition.confidence > 70 ? "default" : "secondary"}>
                            {condition.confidence}%
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Степень тяжести: {condition.severity}
                        </p>
                        <Progress value={condition.confidence} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Recommendations */}
                <Card>
                  <CardHeader>
                    <CardTitle>Рекомендации по лечению</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {currentAnalysis.recommendations.map((rec, index) => (
                      <div key={index}>
                        <h4 className="font-medium text-foreground mb-3">{rec.title}:</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          {rec.instructions.map((instruction, i) => (
                            <p key={i}>• {instruction}</p>
                          ))}
                        </div>
                      </div>
                    ))}

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                      <Button>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Сохранить в историю
                      </Button>
                      <Button variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Скачать PDF
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
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analyses.map((analysis) => (
                    <Card key={analysis.id} className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <img 
                            src={analysis.imageUrl} 
                            alt="Анализ кожи" 
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-medium">{analysis.conditions[0]?.name || 'Анализ'}</p>
                                <p className="text-sm text-muted-foreground">{analysis.date}</p>
                              </div>
                              <Badge variant="secondary">{analysis.conditions[0]?.confidence || 0}%</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Настройки профиля</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Язык интерфейса</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Русский</option>
                    <option>English</option>
                    <option>Қазақша</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Уведомления</label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Email уведомления</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Push уведомления</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-2">Управление данными</h4>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm">Экспорт данных</Button>
                    <Button variant="outline" size="sm">Удалить все данные</Button>
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