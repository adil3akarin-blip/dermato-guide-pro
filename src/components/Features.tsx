import { Shield, Brain, Smartphone, Clock } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Медицинский фокус",
    description: "Алгоритм обучен на обширной базе медицинских данных в сотрудничестве с дерматологами",
    highlight: "99% точность"
  },
  {
    icon: Shield,
    title: "Приватность и безопасность",
    description: "Ваши данные защищены современным шифрованием и не передаются третьим лицам",
    highlight: "GDPR совместимо"
  },
  {
    icon: Clock,
    title: "Понятные рекомендации",
    description: "Получите четкие инструкции по уходу за кожей и рекомендации по лечению",
    highlight: "За 30 секунд"
  },
  {
    icon: Smartphone,
    title: "Мобильность",
    description: "Используйте сервис в любое время с любого устройства - дома или в поездке",
    highlight: "24/7 доступ"
  }
];

const Features = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Почему выбирают SkinAI?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Современные технологии и медицинская экспертиза для заботы о вашей коже
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 group-hover:scale-105 h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>

                {/* Highlight */}
                <div className="mt-auto">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-success/10 text-success">
                    {feature.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Shield className="w-5 h-5" />
            <span>ISO 27001</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Shield className="w-5 h-5" />
            <span>HIPAA совместимо</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Shield className="w-5 h-5" />
            <span>256-bit шифрование</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Shield className="w-5 h-5" />
            <span>EU GDPR</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;