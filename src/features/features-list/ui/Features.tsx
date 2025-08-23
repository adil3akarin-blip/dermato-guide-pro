const Features = () => {
  const features = [
    {
      title: "Медицинский фокус",
      description: "Алгоритмы разработаны с участием дерматологов и основаны на медицинских данных",
      icon: "🏥"
    },
    {
      title: "Приватность и безопасность",
      description: "Ваши данные защищены шифрованием и никогда не передаются третьим лицам",
      icon: "🔒"
    },
    {
      title: "Понятные рекомендации",
      description: "Получайте четкие, пошаговые инструкции по уходу и лечению",
      icon: "📋"
    },
    {
      title: "Мобильность",
      description: "Анализируйте состояние кожи в любое время с вашего телефона",
      icon: "📱"
    }
  ];

  return (
    <section id="features" className="py-20 bg-medical-bg/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Преимущества SkinAI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Почему стоит доверить анализ кожи нашему сервису
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card p-6 rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4 text-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-center mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-center text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 bg-card p-6 rounded-xl shadow-sm border">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-sm font-medium">GDPR Совместимость</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-sm font-medium">Шифрование данных</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-sm font-medium">Медицинская точность</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;