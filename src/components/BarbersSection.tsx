import { MessageCircle, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const barbers = [
  {
    name: "Lucas",
    specialty: "Especialista em Degradê",
    description: "10+ anos de experiência com técnicas de fade e acabamentos precisos",
    certifications: ["Curso Avançado de Barbeiro", "Especialização em Colorimetria"],
    whatsapp: "5521999999991",
    image: "/placeholder.svg",
  },
  {
    name: "João",
    specialty: "Mestre em Barba",
    description: "Referência em modelagem de barba e tratamentos capilares masculinos",
    certifications: ["Barbeiro Profissional", "Técnicas de Navalha"],
    whatsapp: "5521999999992",
    image: "/placeholder.svg",
  },
  {
    name: "Bruno",
    specialty: "Cortes Clássicos",
    description: "Especializado em cortes sociais e estilos atemporais com toque moderno",
    certifications: ["Curso Clássico de Barbearia", "Visagismo Masculino"],
    whatsapp: "5521999999993",
    image: "/placeholder.svg",
  },
];

const BarbersSection = () => {
  const handleWhatsAppClick = (phone: string, barberName: string) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de agendar um horário com ${barberName} na Barbearia Inovar.`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section id="barbeiros" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Nossa Equipe
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Conheça nossos barbeiros
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Profissionais certificados prontos para transformar seu visual
            </p>
          </div>

          {/* Barbers grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {barbers.map((barber) => (
              <div
                key={barber.name}
                className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
                  <img
                    src={barber.image}
                    alt={barber.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {barber.name}
                    </h3>
                    <p className="text-primary font-medium">{barber.specialty}</p>
                  </div>

                  <p className="text-muted-foreground text-sm">
                    {barber.description}
                  </p>

                  {/* Certifications */}
                  <div className="space-y-2">
                    {barber.certifications.map((cert) => (
                      <div
                        key={cert}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Award className="w-4 h-4 text-primary" />
                        {cert}
                      </div>
                    ))}
                  </div>

                  {/* WhatsApp button */}
                  <Button
                    onClick={() => handleWhatsAppClick(barber.whatsapp, barber.name)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 mt-4"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Agendar com {barber.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BarbersSection;
