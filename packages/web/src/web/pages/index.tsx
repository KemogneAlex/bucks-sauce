import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { useLenis } from "../hooks/useLenis";
import Marquee from "../components/Marquee";
import ScrollReveal from "../components/ScrollReveal";
import Footer from "../components/Footer";
import { products } from "../lib/products";

export default function HomePage() {
  useLenis();

  const heroRef = useRef<HTMLDivElement>(null);
  const bottleRef = useRef<HTMLDivElement>(null);
  const [activeProduct, setActiveProduct] = useState(0);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // GSAP hero text stagger
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(
      ".hero-char",
      { yPercent: 110, opacity: 0 },
      { yPercent: 0, opacity: 1, stagger: 0.05, duration: 0.8, ease: "power3.out" }
    );
    tl.fromTo(
      ".hero-sub",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );
    tl.fromTo(
      ".hero-cta",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      "-=0.2"
    );
  }, []);

  // Rotate active product
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProduct((p) => (p + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentProduct = products[activeProduct];

  return (
    <div style={{ background: "var(--black)", color: "var(--cream)", overflowX: "hidden" }}>
      {/* ===== HERO ===== */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: "var(--black)" }}
      >
        {/* Background text */}
        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
          style={{ zIndex: 0 }}
        >
          <div
            className="text-[18vw] uppercase leading-none tracking-tighter opacity-[0.04]"
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: "var(--cream)" }}
          >
            SAUCE
          </div>
        </div>

        {/* Floating fruit emojis */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
          <div className="animate-float absolute top-[15%] left-[8%] text-6xl opacity-30">🍒</div>
          <div className="animate-float2 absolute top-[25%] right-[10%] text-5xl opacity-25">🌶️</div>
          <div className="animate-float3 absolute bottom-[30%] left-[15%] text-4xl opacity-20">🍍</div>
          <div className="animate-float absolute top-[60%] right-[20%] text-5xl opacity-20">🧄</div>
          <div className="animate-float2 absolute top-[40%] left-[5%] text-3xl opacity-15">🔥</div>
        </div>

        {/* Main hero content */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
            {/* Left — text */}
            <div>
              {/* Eyebrow */}
              <div className="hero-sub opacity-0 mb-6">
                <span
                  className="text-[var(--red)] uppercase text-xs tracking-[0.3em]"
                  style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
                >
                  Petit Lot · Vrais Ingrédients
                </span>
              </div>

              {/* Hero title */}
              <div className="overflow-hidden mb-2">
                <h1
                  className="text-[14vw] md:text-[10vw] lg:text-[8vw] uppercase leading-none tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", color: "var(--cream)" }}
                >
                  {"LA MEILLEURE".split("").map((char, i) => (
                    <span
                      key={i}
                      className="hero-char inline-block"
                      style={{ opacity: 0, display: char === " " ? "inline" : "inline-block" }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </h1>
              </div>
              <div className="overflow-hidden mb-2">
                <h1
                  className="text-[14vw] md:text-[10vw] lg:text-[8vw] uppercase leading-none tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", color: "var(--red)" }}
                >
                  {"SAUCE".split("").map((char, i) => (
                    <span
                      key={i}
                      className="hero-char inline-block"
                      style={{ opacity: 0 }}
                    >
                      {char}
                    </span>
                  ))}
                </h1>
              </div>
              <div className="overflow-hidden mb-8">
                <h1
                  className="text-[14vw] md:text-[10vw] lg:text-[8vw] uppercase leading-none tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", color: "var(--cream)" }}
                >
                  {"QUI EXISTE".split("").map((char, i) => (
                    <span
                      key={i}
                      className="hero-char inline-block"
                      style={{ opacity: 0, display: char === " " ? "inline" : "inline-block" }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </h1>
              </div>

              {/* Sub */}
              <p
                className="hero-sub opacity-0 text-[var(--cream)] opacity-70 max-w-md mb-8 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "1.05rem" }}
              >
                Faite en petits lots avec de vrais fruits, des piments frais
                et de l'ail rôti. Aucun sirop de maïs. Aucune huile végétale.
                Aucun compromis.
              </p>

              {/* CTAs */}
              <div className="hero-cta opacity-0 flex flex-col sm:flex-row gap-4">
                <Link to="/shop">
                  <button className="btn-sauce">Commander maintenant →</button>
                </Link>
                <Link to="/shop">
                  <button className="btn-outline">Voir nos saveurs</button>
                </Link>
              </div>
            </div>

            {/* Right — rotating product display */}
            <div className="relative flex items-center justify-center" ref={bottleRef}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProduct.slug}
                  initial={{ opacity: 0, scale: 0.85, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: -40 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative"
                >
                  {/* Product circle */}
                  <div
                    className="relative w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-full flex flex-col items-center justify-center mx-auto"
                    style={{
                      background: `radial-gradient(circle at 40% 40%, ${currentProduct.accentColor}40, ${currentProduct.bgColor}99)`,
                      border: `2px solid ${currentProduct.accentColor}30`,
                      boxShadow: `0 0 80px ${currentProduct.accentColor}25`,
                    }}
                  >
                    {/* Emoji large */}
                    <div className="text-[100px] md:text-[130px] animate-float leading-none select-none">
                      {currentProduct.emoji}
                    </div>
                  </div>

                  {/* Product info overlay */}
                  <div className="absolute -bottom-8 left-0 right-0 text-center">
                    <div
                      className="text-3xl md:text-4xl uppercase tracking-wider text-[var(--cream)] mb-1"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {currentProduct.name}
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      {currentProduct.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[8px] tracking-widest uppercase px-2 py-0.5"
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            color: currentProduct.accentColor,
                            border: `1px solid ${currentProduct.accentColor}50`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dots navigation */}
              <div className="absolute -bottom-20 left-0 right-0 flex items-center justify-center gap-3">
                {products.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveProduct(i)}
                    className="transition-all duration-300"
                    style={{
                      width: i === activeProduct ? "28px" : "8px",
                      height: "8px",
                      borderRadius: i === activeProduct ? "4px" : "50%",
                      background: i === activeProduct ? "var(--red)" : "rgba(245,230,200,0.3)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span
            className="text-[var(--cream)] opacity-40 text-[10px] tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Défiler
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-[var(--red)] to-transparent"
          />
        </motion.div>
      </section>

      {/* ===== MARQUEE 1 ===== */}
      <div
        style={{
          background: "var(--red)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          padding: "14px 0",
          overflow: "hidden",
        }}
      >
        <Marquee
          items={["PETIT LOT", "VRAIS INGRÉDIENTS", "SANS SIROP DE MAÏS", "SANS HUILE VÉGÉTALE", "ARTISANAL", "SANS ADDITIFS"]}
          className="text-white text-2xl tracking-widest"
          separator="✦"
          speed={22}
        />
      </div>

      {/* ===== LA VÉRITÉ SECTION ===== */}
      <section
        style={{ background: "var(--cream)", color: "var(--black)", position: "relative", overflow: "hidden" }}
        className="py-32 px-6"
      >
        {/* Big background text */}
        <div
          className="absolute top-1/2 -translate-y-1/2 left-0 right-0 text-center select-none pointer-events-none"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "22vw",
            color: "rgba(0,0,0,0.04)",
            lineHeight: 1,
          }}
        >
          VRAI
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span
                  className="text-[var(--red)] text-xs tracking-[0.3em] uppercase mb-4 block"
                  style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
                >
                  Notre promesse
                </span>
                <h2
                  className="text-[12vw] sm:text-[8vw] md:text-[6vw] uppercase leading-none tracking-tight mb-8"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", color: "var(--black)" }}
                >
                  Construite<br />
                  sur du<br />
                  <span style={{ color: "var(--red)" }}>Feu</span>
                </h2>
                <p
                  className="text-[var(--black)] opacity-70 leading-relaxed max-w-md"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "1.05rem" }}
                >
                  Chaque bouteille commence avec de vrais fruits, des piments 
                  frais sélectionnés, et de l'ail rôti à la perfection. 
                  Nous n'utilisons jamais de raccourcis et encore moins de sirop 
                  de maïs à haute teneur en fructose.
                </p>
              </div>
            </ScrollReveal>

            {/* Badges grid */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🚫", label: "Sans Sirop de Maïs", sub: "Jamais. Pas une seule fois." },
                  { icon: "🌿", label: "Sans Huile Végétale", sub: "Que des bonnes graisses." },
                  { icon: "🧪", label: "Sans Additifs", sub: "Rien d'artificiel." },
                  { icon: "🔥", label: "Petit Lot", sub: "Fait avec attention." },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-6 flex flex-col gap-2"
                    style={{ border: "1px solid rgba(0,0,0,0.1)", background: "rgba(0,0,0,0.03)" }}
                  >
                    <div className="text-3xl">{item.icon}</div>
                    <div
                      className="text-sm uppercase tracking-widest text-[var(--black)]"
                      style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-xs text-[var(--black)] opacity-50"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                    >
                      {item.sub}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== PRODUITS SECTION ===== */}
      <section className="py-32 px-6" style={{ background: "var(--black)" }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span
                className="text-[var(--red)] text-xs tracking-[0.3em] uppercase mb-4 block"
                style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
              >
                Nos saveurs
              </span>
              <h2
                className="text-[10vw] sm:text-[6vw] uppercase leading-none text-[var(--cream)]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Choisissez votre feu
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <ScrollReveal key={product.slug} delay={i * 0.1} direction="up">
                <Link to={`/shop/${product.slug}`}>
                  <div
                    className="product-card relative overflow-hidden cursor-pointer group"
                    style={{
                      background: `linear-gradient(145deg, ${product.bgColor}, ${product.bgColor}dd)`,
                      border: `1px solid ${product.accentColor}30`,
                      aspectRatio: "3/4",
                    }}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 30%, ${product.accentColor}20, transparent 70%)`,
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                      {/* Top — emoji */}
                      <div className="flex justify-center items-start pt-4">
                        <div className="text-[100px] animate-float leading-none">{product.emoji}</div>
                      </div>

                      {/* Bottom — info */}
                      <div>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {product.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[8px] tracking-widest uppercase px-2 py-0.5"
                              style={{
                                fontFamily: "'Oswald', sans-serif",
                                color: product.accentColor,
                                border: `1px solid ${product.accentColor}40`,
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3
                          className="text-3xl uppercase leading-tight mb-1 text-[var(--cream)]"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          {product.name}
                        </h3>
                        <p
                          className="text-[var(--cream)] opacity-60 text-sm mb-4"
                          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                        >
                          {product.tagline}
                        </p>
                        <div className="flex items-center justify-between">
                          <span
                            className="text-xl text-[var(--cream)]"
                            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
                          >
                            {product.price}
                          </span>
                          <span
                            className="text-[var(--cream)] opacity-70 group-hover:opacity-100 text-sm uppercase tracking-wider transition-all duration-300 group-hover:tracking-[0.2em]"
                            style={{ fontFamily: "'Oswald', sans-serif" }}
                          >
                            Voir →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-12">
              <Link to="/shop">
                <button className="btn-outline">Voir toutes les saveurs →</button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== MARQUEE 2 ===== */}
      <div
        style={{
          borderTop: "1px solid rgba(245,230,200,0.08)",
          borderBottom: "1px solid rgba(245,230,200,0.08)",
          padding: "16px 0",
          overflow: "hidden",
        }}
      >
        <Marquee
          items={["SANS COMPROMIS", "FAITE POUR DURER", "CHAQUE GOUTTE COMPTE", "CUISINÉ À LA MAISON", "PAS EN USINE", "VRAI FRUIT · VRAIE CHALEUR"]}
          direction="right"
          className="text-[var(--cream)] text-2xl tracking-widest opacity-30"
          separator="·"
          speed={28}
        />
      </div>

      {/* ===== TESTIMONIAL / CTA SECTION ===== */}
      <section
        style={{ background: "var(--black)", position: "relative", overflow: "hidden" }}
        className="py-40 px-6 text-center"
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "30vw",
              color: "rgba(204,34,0,0.04)",
              lineHeight: 1,
            }}
          >
            GO
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal>
            <div
              className="text-[10vw] sm:text-[7vw] md:text-[6vw] uppercase leading-none text-[var(--cream)] mb-8"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Prêt à passer au<br />
              <span style={{ color: "var(--red)" }}>niveau supérieur</span><br />
              ?
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p
              className="text-[var(--cream)] opacity-60 mb-10 max-w-xl mx-auto text-lg"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              Commandez maintenant et découvrez pourquoi des milliers
              de personnes ne peuvent plus s'en passer.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Link to="/shop">
              <button
                className="btn-sauce text-lg px-12 py-5"
                style={{ fontSize: "1.1rem" }}
              >
                Commander ma sauce →
              </button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
