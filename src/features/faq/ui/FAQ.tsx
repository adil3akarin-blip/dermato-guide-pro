import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui";

const FAQ = () => {
  const faqs = [
    {
      question: "Насколько точен ИИ-анализ?",
      answer: "Наш алгоритм обучен на тысячах медицинских изображений и показывает точность более 85%. Однако результаты носят справочный характер и не заменяют профессиональную диагностику."
    },
    {
      question: "Безопасны ли мои данные?",
      answer: "Да, мы используем современные методы шифрования. Все изображения обрабатываются локально, а персональные данные защищены согласно GDPR."
    },
    {
      question: "Когда нужно обратиться к врачу?",
      answer: "Мы рекомендуем консультацию дерматолога при любых изменениях родинок, появлении новых образований, или если наш анализ показывает потенциально серьёзные состояния."
    },
    {
      question: "Можно ли использовать для детей?",
      answer: "Анализ подходит для всех возрастов, но для детей до 12 лет рекомендуем предварительную консультацию с педиатром."
    },
    {
      question: "Какие типы заболеваний кожи анализирует ИИ?",
      answer: "Система распознает более 20 типов состояний: акне, экзему, дерматит, псориаз, грибковые инфекции и другие распространённые заболевания."
    },
    {
      question: "Сколько стоит анализ?",
      answer: "Первый анализ бесплатный. Далее доступны планы: Базовый (3 анализа в месяц) и Премиум (безлимит + консультации врачей)."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о нашем сервисе
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Не нашли ответ на свой вопрос?
          </p>
          <button className="text-primary hover:underline font-medium">
            Свяжитесь с нами
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;