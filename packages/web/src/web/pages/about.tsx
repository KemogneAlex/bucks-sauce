import { motion } from "framer-motion";
import { Link } from "wouter";
import { useLenis } from "../hooks/useLenis";
import ScrollReveal from "../components/ScrollReveal";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";

export default function AboutPage() {
  useLenis();

  return (
    <div style={{ background: "var(--black)", color: "var(--cream)", overflowX: "hidden" }}>
      {/* Hero */}
      <section className="min-h-[70vh] flex flex-col justify-center px-6 pt-28 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 flex items-center pointer-events-none select-none"
          style={{ zIndex: 0 }}
        >
          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "30vw",
              color: "rgba(204,34,0,0.04)",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            BUCKS
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="text-[var(--red)] text-xs tracking-[0.3em] uppercase mb-6 block"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
            >
              Notre histoire
            </span>
            <h1
              className="uppercase leading-none text-[var(--cream)] mb-8"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(60px, 12vw, 150px)",
              }}
            >
              Construite<br />
              sur du<br />
              <span style={{ color: "var(--red)" }}>Feu</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section style={{ background: "var(--cream)", color: "var(--black)" }} className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="text-8xl animate-float">🔥</div>
              <div
                className="text-[100px] leading-none uppercase mt-4 opacity-10"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                1997
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <h2
                className="text-5xl uppercase mb-6 text-[var(--black)]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Ça commence dans une cuisine
              </h2>
              <p
                className="text-[var(--black)] opacity-70 leading-relaxed mb-6"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "1.05rem" }}
              >
                Bucks Sauce est née d'une obsession simple : créer la sauce BBQ 
                parfaite. Pas une sauce commerciale pleine de sirop de maïs et 
                d'additifs, mais une vraie sauce, faite avec de vrais ingrédients.
              </p>
              <p
                className="text-[var(--black)] opacity-70 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "1.05rem" }}
              >
                Des années de recettes, de tests et de retours de famille et amis 
                nous ont menés à trois saveurs qui capturent ce que le BBQ devrait 
                vraiment goûter.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <div
        style={{
          background: "var(--black)",
          borderTop: "1px solid rgba(245,230,200,0.06)",
          padding: "16px 0",
          overflow: "hidden",
        }}
      >
        <Marquee
          items={["SANS COMPROMIS", "FAIT AVEC PASSION", "VRAIS INGRÉDIENTS", "PETIT LOT", "CHAQUE GOUTTE COMPTE"]}
          className="text-[var(--cream)] text-3xl tracking-widest opacity-20"
          separator="✦"
        />
      </div>

      {/* Values */}
      <section style={{ background: "var(--black)" }} className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2
              className="text-center uppercase text-[var(--cream)] mb-20"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(50px, 8vw, 90px)" }}
            >
              Ce en quoi on<br />
              <span style={{ color: "var(--red)" }}>croit</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "La vérité en bouteille",
                body: "Si vous ne reconnaissez pas un ingrédient, il ne devrait pas être dans votre sauce.",
                emoji: "📖",
              },
              {
                num: "02",
                title: "Le feu, pas les additifs",
                body: "La chaleur doit venir des piments, pas des produits chimiques.",
                emoji: "🔥",
              },
              {
                num: "03",
                title: "Petit lot, grande qualité",
                body: "Nous n'avons pas l'intention de faire des compromis sur la qualité pour grandir plus vite.",
                emoji: "🏆",
              },
            ].map((v, i) => (
              <ScrollReveal key={v.num} delay={i * 0.12}>
                <div
                  className="p-8"
                  style={{ border: "1px solid rgba(245,230,200,0.08)" }}
                >
                  <div
                    className="text-5xl mb-4"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      color: "var(--red)",
                      opacity: 0.5,
                    }}
                  >
                    {v.num}
                  </div>
                  <div className="text-4xl mb-4">{v.emoji}</div>
                  <h3
                    className="text-2xl uppercase text-[var(--cream)] mb-3"
                    style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
                  >
                    {v.title}
                  </h3>
                  <p
                    className="text-[var(--cream)] opacity-50 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                  >
                    {v.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ background: "var(--red)" }}
        className="py-24 px-6 text-center"
      >
        <ScrollReveal>
          <h2
            className="uppercase text-white mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(50px, 8vw, 100px)" }}
          >
            Prêt à goûter ?
          </h2>
          <Link to="/shop">
            <button
              className="text-sm uppercase tracking-widest px-10 py-4 font-semibold transition-all duration-300 hover:bg-white hover:text-[var(--red)]"
              style={{
                fontFamily: "'Oswald', sans-serif",
                background: "transparent",
                border: "2px solid white",
                color: "white",
              }}
            >
              Commander ma sauce →
            </button>
          </Link>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
