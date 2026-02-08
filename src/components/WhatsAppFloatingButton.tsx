import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

const barbers = [
  { name: "Lucas", whatsapp: "5521999999991" },
  { name: "João", whatsapp: "5521999999992" },
  { name: "Bruno", whatsapp: "5521999999993" },
];

const WhatsAppFloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = (phone: string, barberName: string) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de agendar um horário com ${barberName} na Barbearia Inovar.`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Popup */}
      <div
        className={cn(
          "absolute bottom-16 right-0 w-64 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden transition-all duration-300",
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <div className="p-4 border-b border-border">
          <h4 className="font-semibold text-foreground">Agendar com:</h4>
        </div>
        <div className="p-2">
          {barbers.map((barber) => (
            <button
              key={barber.name}
              onClick={() => handleWhatsAppClick(barber.whatsapp, barber.name)}
              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors text-left"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">{barber.name}</p>
                <p className="text-xs text-muted-foreground">Clique para agendar</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 glow-primary",
          isOpen && "rotate-90"
        )}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default WhatsAppFloatingButton;
