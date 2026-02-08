const galleryItems = [
  { image: "/placeholder.svg", barber: "Lucas", style: "Degradê Médio" },
  { image: "/placeholder.svg", barber: "João", style: "Barba Desenhada" },
  { image: "/placeholder.svg", barber: "Bruno", style: "Corte Social" },
  { image: "/placeholder.svg", barber: "Lucas", style: "Fade Alto" },
  { image: "/placeholder.svg", barber: "João", style: "Barba Lenhador" },
  { image: "/placeholder.svg", barber: "Bruno", style: "Clássico Moderno" },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="section-padding">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Galeria
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Nossos trabalhos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Confira alguns dos cortes realizados pela nossa equipe
            </p>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-secondary"
              >
                <img
                  src={item.image}
                  alt={item.style}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-foreground font-semibold">{item.style}</p>
                  <p className="text-primary text-sm">por {item.barber}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
