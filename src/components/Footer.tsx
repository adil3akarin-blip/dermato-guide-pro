import { Stethoscope, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Stethoscope className="h-8 w-8 text-primary" />
              <span className="text-xl font-semibold text-foreground">SkinAI</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Современная платформа для анализа кожи с использованием искусственного интеллекта. 
              Помогаем заботиться о здоровье вашей кожи.
            </p>
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <select className="bg-transparent text-sm text-muted-foreground border border-border rounded px-2 py-1">
                <option value="ru">Русский</option>
                <option value="kz">Қазақша</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Продукт</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Личный кабинет
                </Link>
              </li>
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Возможности
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Тарифы
                </a>
              </li>
              <li>
                <a href="#demo" className="text-muted-foreground hover:text-primary transition-colors">
                  Демо
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Документы</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Пользовательское соглашение
                </a>
              </li>
              <li>
                <a href="/medical-disclaimer" className="text-muted-foreground hover:text-primary transition-colors">
                  Медицинский дисклеймер
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 SkinAI. Все права защищены.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <p className="text-xs text-muted-foreground">
                Результаты анализа носят справочный характер и не заменяют консультацию врача
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;