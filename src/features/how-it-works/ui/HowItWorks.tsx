import uploadIcon from "@/assets/upload-icon.jpg";
import aiAnalysisIcon from "@/assets/ai-analysis-icon.jpg";
import consultationIcon from "@/assets/consultation-icon.jpg";

const HowItWorks = () => {
  const steps = [
    {
      icon: uploadIcon,
      title: "Загрузка фото",
      description: "Сделайте качественное фото проблемной области при хорошем освещении"
    },
    {
      icon: aiAnalysisIcon,
      title: "ИИ-оценка",
      description: "Наш алгоритм анализирует изображение и определяет возможные состояния кожи"
    },
    {
      icon: consultationIcon,
      title: "Рекомендации",
      description: "Получите персонализированные советы по уходу и лечению"
    },
    {
      icon: consultationIcon,
      title: "Консультация врача",
      description: "При необходимости запишитесь на консультацию к специалисту"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Как это работает
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Четыре простых шага к пониманию состояния вашей кожи
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-medical-accent to-medical-secondary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <img src={step.icon} alt={step.title} className="w-8 h-8 object-cover rounded" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-center text-sm">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-medical-accent to-medical-secondary"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;