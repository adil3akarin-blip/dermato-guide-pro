import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Насколько точен ИИ-анализ кожи?",
    answer: "Наш алгоритм показывает точность 99% в определении основных состояний кожи. Однако помните, что это предварительная оценка, которая не заменяет консультацию врача-дерматолога."
  },
  {
    question: "Безопасны ли мои данные и фотографии?",
    answer: "Абсолютно. Все данные шифруются с использованием 256-битного шифрования, соответствуют стандартам GDPR и HIPAA. Фотографии обрабатываются локально и удаляются после анализа, если вы не сохраните их в личном кабинете."
  },
  {
    question: "Когда следует обратиться к врачу?",
    answer: "Обязательно обратитесь к дерматологу, если обнаружили: новые или изменяющиеся родинки, кровоточащие образования, незаживающие раны, или если наш анализ показал высокий риск серьезного заболевания."
  },
  {
    question: "Какие состояния кожи может определить система?",
    answer: "Система анализирует более 50 состояний кожи, включая акне, экзему, дерматит, псориаз, различные виды сыпи, пигментные пятна и предраковые состояния. Для каждого состояния предоставляются рекомендации по уходу."
  },
  {
    question: "Можно ли использовать сервис для детей?",
    answer: "Да, но для детей до 16 лет требуется согласие родителей или опекунов. Также рекомендуем более частые консультации с педиатром или детским дерматологом при любых изменениях кожи у ребенка."
  },
  {
    question: "Сколько стоит использование сервиса?",
    answer: "Первый анализ всегда бесплатный. Дальнейшие анализы доступны в рамках подписки Premium (990₽/месяц) с неограниченными анализами и расширенными рекомендациями."
  },
  {
    question: "Как подготовить фото для анализа?",
    answer: "Фотографируйте при хорошем естественном освещении, держите камеру на расстоянии 15-20 см, убедитесь в резкости изображения. Не используйте фильтры или вспышку. Участок кожи должен быть чистым."
  },
  {
    question: "Работает ли сервис на всех устройствах?",
    answer: "Да, сервис адаптирован для работы на всех современных устройствах: смартфонах, планшетах и компьютерах. Рекомендуем использовать актуальные версии браузеров для лучшего качества анализа."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ответы на основные вопросы о безопасности, точности и использовании нашего сервиса
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-card hover:bg-accent/20 transition-colors"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact support */}
        <div className="mt-16 text-center">
          <div className="bg-accent/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Не нашли ответ на свой вопрос?
            </h3>
            <p className="text-muted-foreground mb-6">
              Наша команда поддержки готова помочь вам 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@skinai.com"
                className="inline-flex items-center justify-center h-10 px-6 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-colors"
              >
                Написать в поддержку
              </a>
              <a
                href="tel:+7800123456"
                className="inline-flex items-center justify-center h-10 px-6 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
              >
                Позвонить: +7 (800) 123-45-67
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;