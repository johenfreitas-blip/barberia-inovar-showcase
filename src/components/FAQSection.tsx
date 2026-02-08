import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Precisa agendar para ser atendido?",
    answer:
      "Recomendamos agendar pelo WhatsApp para garantir seu horário preferido. No entanto, também atendemos por ordem de chegada, sujeito à disponibilidade.",
  },
  {
    question: "Qual o horário de funcionamento?",
    answer:
      "Funcionamos de terça a sábado, das 9h às 20h. Domingos e segundas estamos fechados.",
  },
  {
    question: "Onde fica a barbearia?",
    answer:
      "Estamos localizados em Copacabana, Rio de Janeiro. O endereço completo será enviado após o agendamento pelo WhatsApp.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos dinheiro, PIX, cartões de débito e crédito (Visa, Mastercard, Elo).",
  },
  {
    question: "Posso escolher meu barbeiro preferido?",
    answer:
      "Sim! Ao agendar pelo WhatsApp, você pode solicitar atendimento com Lucas, João ou Bruno diretamente.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Dúvidas Frequentes
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Perguntas e respostas
            </h2>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
