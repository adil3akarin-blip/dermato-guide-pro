const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">SkinAI</h3>
            <p className="text-sm text-muted-foreground">
              ИИ-анализ кожи для ранней диагностики и персонализированных рекомендаций
            </p>
            <div className="flex space-x-2">
              <span className="text-xs bg-medical-accent/20 text-medical-accent px-2 py-1 rounded">
                RU
              </span>
              <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded cursor-pointer hover:bg-medical-accent/20">
                KZ
              </span>
              <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded cursor-pointer hover:bg-medical-accent/20">
                EN
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Продукт</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Как это работает</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Преимущества</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Тарифы</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Поддержка</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Статус сервиса</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Юридическое</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Пользовательское соглашение</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Согласие на обработку данных</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Отказ от ответственности</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 SkinAI. Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground mt-4 md:mt-0">
            Результаты анализа носят справочный характер и не заменяют медицинскую консультацию
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;