import { Upload, Brain, FileText, Users } from "lucide-react";
import uploadIcon from "@/assets/upload-icon.jpg";
import aiIcon from "@/assets/ai-analysis-icon.jpg";
import consultationIcon from "@/assets/consultation-icon.jpg";

const steps = [
  {
    icon: Upload,
    image: uploadIcon,
    title: "Загрузка фото",
    description: "Сделайте четкое фото проблемного участка кожи в хорошем освещении",
    step: "01"
  },
  {
    icon: Brain,
    image: aiIcon,
    title: "ИИ-оценка",
    description: "Наш алгоритм анализирует изображение и выявляет возможные состояния кожи",
    step: "02"
  },
  {
    icon: FileText,
    image: null,
    title: "Рекомендации по лечению",
    description: "Получите персонализированные советы по уходу и лечению",
    step: "03"
  },
  {
    icon: Users,
    image: consultationIcon,
    title: "Консультация врача",
    description: "При необходимости запишитесь на прием к специалисту-дерматологу",
    step: "04"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Как это работает?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Простой и безопасный процесс анализа кожи с использованием современных технологий искусственного интеллекта
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg z-10">
                {step.step}
              </div>

              {/* Card */}
              <div className="gradient-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-border/50">
                {/* Icon or Image */}
                <div className="mb-6">
                  {step.image ? (
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-16 h-16 mx-auto rounded-xl object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-card p-6 rounded-2xl shadow-sm border border-border/50">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span>Медицинская точность</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span>Конфиденциальность данных</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span>Сертифицированные алгоритмы</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;