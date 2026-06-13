import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLenis } from "../hooks/useLenis";
import Marquee from "../components/Marquee";
import ScrollReveal from "../components/ScrollReveal";
import Footer from "../components/Footer";
import { products } from "../lib/products";

export default function ShopPage() {
  useLenis();

  return (
    <div style={{ background: "var(--black)", color: "var(--cream)", overflowX: "hidden" }}>
      {/* Hero */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Big bg text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ zIndex: 0 }}
        >
          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "28vw",
              color: "rgba(245,230,200,0.03)",
              lineHeight: 1,
            }}
          >
            SHOP
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="text-[var(--red)] text-xs tracking-[0.3em] uppercase mb-6 block"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
            >
              Nos produits
            </span>
            <h1
              className="uppercase leading-none text-[var(--cream)] mb-6"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(60px, 12vw, 140px)",
              }}
            >
              Choisissez<br />
              <span style={{ color: "var(--red)" }}>votre feu</span>
            </h1>
            <p
              className="text-[var(--cream)] opacity-60 max-w-lg mx-auto text-lg"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              Trois saveurs. Aucun compromis. Vrais ingrédients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div
        style={{
          background: "var(--red)",
          padding: "12px 0",
          overflow: "hidden",
        }}
      >
        <Marquee
          items={["PETIT LOT", "VRAIS INGRÉDIENTS", "SANS SIROP DE MAÏS", "ARTISANAL", "SANS ADDITIFS"]}
          className="text-white text-xl tracking-widest"
          separator="✦"
          speed={20}
        />
      </div>

      {/* Products grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <ScrollReveal key={product.slug} delay={i * 0.12} direction="up">
                <Link to={`/shop/${product.slug}`}>
                  <div
                    className="product-card relative overflow-hidden cursor-pointer group"
                    style={{
                      background: `linear-gradient(160deg, ${product.bgColor}ee, ${product.bgColor}99)`,
                      border: `1px solid ${product.accentColor}25`,
                    }}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${product.accentColor}18, transparent 65%)`,
                      }}
                    />

                    {/* Top section — product visual */}
                    <div
                      className="relative flex flex-col items-center justify-center py-16 px-8"
                      style={{ minHeight: 280 }}
                    >
                      {/* Floating emoji */}
                      <div className="text-[120px] leading-none animate-float select-none">
                        {product.emoji}
                      </div>

                      {/* Number */}
                      <div
                        className="absolute top-6 left-6 text-[70px] leading-none select-none"
                        style={{
                          fontFamily: "'Bebas Neue', sans-serif",
                          color: `${product.accentColor}20`,
                        }}
                      >
                        0{i + 1}
                      </div>
                    </div>

                    {/* Divider */}
                    <div style={{ height: "1px", background: `${product.accentColor}20` }} />

                    {/* Bottom — info */}
                    <div className="p-8">
                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[8px] tracking-widest uppercase px-2 py-0.5"
                            style={{
                              fontFamily: "'Oswald', sans-serif",
                              color: product.accentColor,
                              border: `1px solid ${product.accentColor}35`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h2
                        className="text-4xl uppercase leading-tight mb-2 text-[var(--cream)]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {product.name}
                      </h2>
                      <p
                        className="text-[var(--cream)] opacity-55 text-sm mb-6 leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                      >
                        {product.description}
                      </p>

                      {/* Price + CTA */}
                      <div className="flex items-center justify-between">
                        <span
                          className="text-2xl text-[var(--cream)]"
                          style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
                        >
                          {product.price}
                        </span>
                        <span
                          className="px-6 py-2 text-sm uppercase tracking-wider font-semibold transition-all duration-300 group-hover:bg-[var(--red)] group-hover:text-white"
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            border: `1px solid ${product.accentColor}50`,
                            color: product.accentColor,
                          }}
                        >
                          Découvrir →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's in it section */}
      <section
        style={{ background: "var(--cream)", color: "var(--black)" }}
        className="py-32 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2
                className="uppercase leading-none text-[var(--black)]"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(50px, 8vw, 100px)",
                }}
              >
                Juste de la vraie<br />
                <span style={{ color: "var(--red)" }}>nourriture</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🍒", label: "Vrais Fruits", sub: "Directement de la ferme" },
              { icon: "🌶️", label: "Piments Frais", sub: "Pas de poudre séchée" },
              { icon: "🧄", label: "Ail Rôti", sub: "Rôti lentement" },
              { icon: "🍯", label: "Miel Brut", sub: "Jamais du sirop" },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1}>
                <div className="text-center py-8 px-4" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <div
                    className="text-sm uppercase tracking-widest text-[var(--black)] mb-1"
                    style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="text-xs text-[var(--black)] opacity-50"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.sub}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
