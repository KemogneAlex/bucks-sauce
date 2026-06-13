import { Link } from "wouter";
import BucksLogo from "./BucksLogo";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#060606",
        borderTop: "1px solid rgba(245,230,200,0.08)",
      }}
      className="px-6 py-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <BucksLogo width={60} height={72} />
            </div>
            <p
              className="text-[var(--cream)] opacity-50 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              Faite en petits lots avec de vrais ingrédients.
              Pas de sirop de maïs. Pas d'huiles végétales.
              Pas d'additifs. Juste de la vraie sauce.
            </p>
          </div>

          {/* Links */}
          <div>
            <div
              className="text-[var(--cream)] opacity-40 text-xs tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Navigation
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: "Accueil", href: "/" },
                { label: "Commander", href: "/shop" },
                { label: "Notre Histoire", href: "/about" },
              ].map((link) => (
                <Link key={link.href} to={link.href}>
                  <span
                    className="text-[var(--cream)] opacity-60 hover:opacity-100 hover:text-[var(--red)] transition-all text-sm cursor-pointer"
                    style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 300 }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Badges */}
          <div>
            <div
              className="text-[var(--cream)] opacity-40 text-xs tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Notre Engagement
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "SANS SIROP MAÏS",
                "SANS HUILE VÉGÉTALE",
                "SANS ADDITIFS",
                "PETIT LOT",
                "INGRÉDIENTS VRAIS",
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 text-[9px] tracking-widest uppercase"
                  style={{
                    border: "1px solid rgba(184,134,11,0.4)",
                    color: "var(--gold)",
                    fontFamily: "'Oswald', sans-serif",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4"
          style={{ borderTop: "1px solid rgba(245,230,200,0.06)" }}
        >
          <p
            className="text-[var(--cream)] opacity-30 text-xs"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © {new Date().getFullYear()} Bucks Sauce. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {["Confidentialité", "CGU", "Contact"].map((item) => (
              <span
                key={item}
                className="text-[var(--cream)] opacity-30 hover:opacity-70 text-xs cursor-pointer transition-opacity"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
