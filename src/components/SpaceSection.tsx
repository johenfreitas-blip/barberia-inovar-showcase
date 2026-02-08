const spaceImages = [
  { image: "/placeholder.svg", caption: "Área de Atendimento" },
  { image: "/placeholder.svg", caption: "Estação de Trabalho" },
  { image: "/placeholder.svg", caption: "Área de Espera" },
];

const SpaceSection = () => {
  return (
    <section id="espaco" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Nosso Espaço
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Conheça o ambiente
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um espaço pensado para proporcionar conforto e uma experiência premium
            </p>
          </div>

          {/* Space images */}
          <div className="grid md:grid-cols-3 gap-6">
            {spaceImages.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border"
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
                  <p className="text-foreground font-medium">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;
