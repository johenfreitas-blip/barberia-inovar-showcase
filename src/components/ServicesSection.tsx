const services = [
  {
    name: "Corte Social",
    description: "Corte clássico com acabamento refinado, ideal para o dia a dia profissional",
  },
  {
    name: "Degradê",
    description: "Transição suave entre diferentes alturas, do mais básico ao mais elaborado",
  },
  {
    name: "Navalhado",
    description: "Acabamento preciso com navalha para um visual limpo e moderno",
  },
  {
    name: "Barba Completa",
    description: "Modelagem, hidratação e finalização com produtos premium",
  },
  {
    name: "Corte + Barba",
    description: "Combo completo para quem busca um visual totalmente renovado",
  },
  {
    name: "Pigmentação",
    description: "Técnica avançada para preencher falhas e realçar a densidade",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Nossos Serviços
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              O que oferecemos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada serviço é executado com dedicação e técnicas de alto padrão
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {service.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
