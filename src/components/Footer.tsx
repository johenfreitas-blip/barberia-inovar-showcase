import { MapPin, Clock, Phone, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                <span className="text-foreground">Barbearia</span>{" "}
                <span className="text-primary">Inovar</span>
              </h3>
              <p className="text-muted-foreground">
                Estilo, precisão e atitude. A sua barbearia premium em Copacabana.
              </p>
              {/* Social links */}
              <div className="flex gap-4 pt-2">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Copacabana, Rio de Janeiro - RJ</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>(21) 99999-9999</span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Horário de Funcionamento</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p>Terça a Sexta: 9h às 20h</p>
                    <p>Sábado: 9h às 18h</p>
                    <p className="text-muted-foreground/60">Domingo e Segunda: Fechado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Barbearia Inovar. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
