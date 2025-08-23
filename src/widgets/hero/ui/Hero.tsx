import { Button } from "@/shared/ui";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-medical-bg to-medical-light flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Загрузите фото кожи — получите точную первичную оценку
              </h1>
              <p className="text-lg text-muted-foreground">
                ИИ-анализ изображений, разработанный совместно с дерматологами
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary"
              >
                Начать анализ бесплатно
              </Button>
              <Button variant="outline" size="lg">
                Войти
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-medical-accent rounded-full"></div>
                <span>Конфиденциально</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-medical-accent rounded-full"></div>
                <span>Медицинская точность</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Медицинский анализ кожи" 
                className="rounded-2xl shadow-medical w-full h-auto"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-medical-accent/20 to-medical-secondary/20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;