import { Button } from "@/shared/ui";

const Header = () => {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-primary">SkinAI</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              Как это работает
            </a>
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Преимущества
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Войти
            </Button>
            <Button size="sm">
              Начать анализ
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;