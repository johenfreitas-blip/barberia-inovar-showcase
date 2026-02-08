import { Scissors, Award, Users } from "lucide-react";

const features = [
  {
    icon: Scissors,
    title: "Precisão",
    description: "Cortes executados com técnica impecável e atenção aos detalhes",
  },
  {
    icon: Award,
    title: "Experiência",
    description: "Profissionais certificados com anos de experiência no mercado",
  },
  {
    icon: Users,
    title: "Atendimento",
    description: "Cada cliente é único e merece um tratamento personalizado",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Section header */}
          <div className="space-y-4">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Tradição e inovação em cada corte
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A Barbearia Inovar nasceu com a missão de elevar o padrão de cuidado
              masculino em Copacabana. Unimos técnicas clássicas com as tendências
              mais atuais para entregar resultados excepcionais.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
