import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical.jpg";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-hero py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
              Загрузите фото кожи — получите{" "}
              <span className="text-primary">точную первичную оценку</span> и рекомендации
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              ИИ-анализ изображений, разработанный совместно с дерматологами. 
              Быстрая предварительная оценка состояния кожи с персонализированными рекомендациями.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="lg" className="group">
                Начать анализ бесплатно
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="soft" size="lg" className="group">
                <Play className="mr-2 h-5 w-5" />
                Посмотреть демо
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                Конфиденциально
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                Без регистрации
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                За 30 секунд
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in-up">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Медицинский анализ кожи с помощью ИИ"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full animate-pulse-soft"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
    </section>
  );
};

export default Hero;