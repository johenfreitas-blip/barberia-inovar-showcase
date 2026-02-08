import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rafael M.",
    rating: 5,
    text: "Melhor barbearia de Copacabana! O Lucas manja muito de degradê, sempre saio satisfeito.",
  },
  {
    name: "Pedro S.",
    rating: 5,
    text: "Atendimento impecável e ambiente muito agradável. O João é especialista em barba, recomendo demais!",
  },
  {
    name: "Carlos A.",
    rating: 5,
    text: "Frequento há 2 anos e nunca me decepcionei. Bruno faz um corte social perfeito para o trabalho.",
  },
  {
    name: "Thiago R.",
    rating: 5,
    text: "Profissionais de alto nível e atendimento personalizado. Vale cada centavo!",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="avaliacoes" className="section-padding">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Avaliações
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              O que dizem nossos clientes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A satisfação dos nossos clientes é nossa maior conquista
            </p>
          </div>

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                {/* Quote icon */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground mb-6 text-lg">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <p className="text-muted-foreground font-medium">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
