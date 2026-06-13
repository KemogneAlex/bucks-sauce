import { useParams, Link } from "wouter";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ShoppingBag, Plus, Minus } from "lucide-react";
import { useLenis } from "../hooks/useLenis";
import ScrollReveal from "../components/ScrollReveal";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";
import { getProductBySlug, products } from "../lib/products";

export default function ProductPage() {
  useLenis();
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug);

  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<"ingredients" | "nutrition">("ingredients");
  const [addedToCart, setAddedToCart] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const fruitY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: "var(--black)", color: "var(--cream)" }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "6rem" }}>404</div>
        <p style={{ fontFamily: "'Oswald', sans-serif" }} className="mb-8 opacity-60">Produit introuvable</p>
        <Link to="/shop"><button className="btn-sauce">Voir nos sauces</button></Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div style={{ background: "var(--black)", color: "var(--cream)", overflowX: "hidden" }}>
      {/* ===== HERO — SPLIT LAYOUT ===== */}
      <section
        ref={heroRef}
        className="min-h-screen relative overflow-hidden"
        style={{ background: product.bgColor }}
      >
        {/* Accent glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 60% 40%, ${product.accentColor}25, transparent 65%)`,
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(245,230,200,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,230,200,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen items-center relative z-10">
          {/* Left — product visual */}
          <div className="relative flex items-center justify-center order-2 lg:order-1">
            {/* Background number */}
            <div
              className="absolute select-none pointer-events-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "35vw",
                color: `${product.accentColor}12`,
                lineHeight: 1,
                left: "-5%",
              }}
            >
              0{products.findIndex(p => p.slug === slug) + 1}
            </div>

            {/* Floating fruits */}
            <motion.div style={{ y: fruitY }} className="relative">
              {/* Secondary fruits */}
              <div className="absolute -top-12 -left-8 text-5xl animate-float2 opacity-50">{product.emoji}</div>
              <div className="absolute -bottom-8 -right-6 text-4xl animate-float3 opacity-40">{product.emoji}</div>
              <div className="absolute top-1/2 -right-16 text-3xl animate-float opacity-30">🔥</div>
              <div className="absolute top-0 right-0 text-2xl animate-float2 opacity-30">🧄</div>

              {/* Main visual */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative"
              >
                <div
                  className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full flex items-center justify-center relative"
                  style={{
                    background: `radial-gradient(circle at 35% 35%, ${product.accentColor}50, ${product.bgColor})`,
                    boxShadow: `0 0 100px ${product.accentColor}30`,
                    border: `2px solid ${product.accentColor}25`,
                  }}
                >
                  <div className="text-[150px] md:text-[190px] animate-float select-none leading-none">
                    {product.emoji}
                  </div>
                </div>

                {/* Taste tags — floating chips */}
                {product.tasteTags.map((tag, i) => {
                  const angles = [320, 40, 210, 140];
                  const angle = angles[i] || i * 90;
                  const r = 200;
                  const x = Math.cos((angle * Math.PI) / 180) * r;
                  const y2 = Math.sin((angle * Math.PI) / 180) * r;
                  return (
                    <div
                      key={tag.label}
                      className="absolute px-3 py-1.5 text-[10px] uppercase tracking-widest backdrop-blur-sm"
                      style={{
                        fontFamily: "'Oswald', sans-serif",
                        fontWeight: 600,
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y2}px)`,
                        transform: "translate(-50%, -50%)",
                        background: `${product.accentColor}25`,
                        border: `1px solid ${product.accentColor}40`,
                        color: "var(--cream)",
                        whiteSpace: "nowrap",
                        display: "none",
                      }}
                    >
                      {tag.label}
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>

          {/* Right — info */}
          <div className="order-1 lg:order-2">
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link to="/shop">
                <span
                  className="flex items-center gap-2 text-[var(--cream)] opacity-50 hover:opacity-100 transition-opacity text-sm cursor-pointer"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  <ChevronLeft size={16} />
                  Toutes les saveurs
                </span>
              </Link>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-2 mb-5"
            >
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] tracking-[0.2em] uppercase px-3 py-1"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    color: product.accentColor,
                    border: `1px solid ${product.accentColor}50`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="uppercase leading-none text-[var(--cream)] mb-4"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(52px, 7vw, 90px)",
              }}
            >
              {product.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[var(--cream)] opacity-60 mb-8 leading-relaxed text-lg"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              {product.longDescription}
            </motion.p>

            {/* Taste profile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-8"
            >
              <div
                className="text-[var(--cream)] opacity-40 text-[10px] tracking-[0.25em] uppercase mb-4"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Profil gustatif
              </div>
              <div className="flex flex-col gap-3">
                {product.tasteTags.map((tag) => (
                  <div key={tag.label} className="flex items-center gap-4">
                    <div
                      className="text-[var(--cream)] text-sm w-20 shrink-0"
                      style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
                    >
                      {tag.label}
                    </div>
                    <div
                      className="flex-1 h-1 rounded-full"
                      style={{ background: "rgba(245,230,200,0.1)" }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${tag.intensity}%` }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: product.accentColor }}
                      />
                    </div>
                    <div
                      className="text-[var(--cream)] opacity-40 text-xs w-8 text-right"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {tag.intensity}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Price + Qty */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-6 mb-6"
            >
              <div
                className="text-4xl text-[var(--cream)]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {product.price}
              </div>
              <div className="flex items-center gap-0">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-10 flex items-center justify-center text-[var(--cream)] hover:text-[var(--red)] transition-colors"
                  style={{ border: "1px solid rgba(245,230,200,0.2)" }}
                >
                  <Minus size={14} />
                </button>
                <div
                  className="w-12 h-10 flex items-center justify-center text-[var(--cream)]"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 600,
                    borderTop: "1px solid rgba(245,230,200,0.2)",
                    borderBottom: "1px solid rgba(245,230,200,0.2)",
                  }}
                >
                  {qty}
                </div>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-10 h-10 flex items-center justify-center text-[var(--cream)] hover:text-[var(--red)] transition-colors"
                  style={{ border: "1px solid rgba(245,230,200,0.2)" }}
                >
                  <Plus size={14} />
                </button>
              </div>
            </motion.div>

            {/* Add to cart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-3 py-5 text-base uppercase tracking-widest font-semibold transition-all duration-300"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  background: addedToCart ? "var(--gold)" : "var(--red)",
                  color: "var(--cream)",
                  border: "none",
                }}
              >
                <ShoppingBag size={20} />
                {addedToCart ? "Ajouté au panier ✓" : `Ajouter au panier — ${(product.priceNum * qty).toFixed(2).replace(".", ",")} €`}
              </button>
            </motion.div>

            {/* Pairs with */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-6"
            >
              <span
                className="text-[var(--cream)] opacity-40 text-[9px] tracking-[0.25em] uppercase"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Se marie avec :
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {product.pairsWith.map((p) => (
                  <span
                    key={p}
                    className="px-3 py-1 text-[10px] tracking-widest uppercase"
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      color: "var(--cream)",
                      opacity: 0.6,
                      border: "1px solid rgba(245,230,200,0.15)",
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <div
        style={{
          background: "var(--black)",
          borderTop: "1px solid rgba(245,230,200,0.06)",
          borderBottom: "1px solid rgba(245,230,200,0.06)",
          padding: "14px 0",
          overflow: "hidden",
        }}
      >
        <Marquee
          items={[product.name.toUpperCase(), ...product.tags, "PETIT LOT", "VRAIS INGRÉDIENTS"]}
          className="text-[var(--cream)] opacity-20 text-3xl tracking-widest uppercase"
          speed={20}
          separator="·"
        />
      </div>

      {/* ===== INGREDIENTS / NUTRITION TABS ===== */}
      <section style={{ background: "var(--black)" }} className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div
              className="uppercase text-center mb-12"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(40px, 7vw, 80px)",
                color: "var(--cream)",
              }}
            >
              Ce qu'il y a<br />
              <span style={{ color: "var(--red)" }}>dedans</span>
            </div>
          </ScrollReveal>

          {/* Tabs */}
          <ScrollReveal delay={0.1}>
            <div className="flex mb-12" style={{ borderBottom: "1px solid rgba(245,230,200,0.1)" }}>
              {(["ingredients", "nutrition"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="flex-1 py-4 text-sm uppercase tracking-widest transition-all duration-300 relative"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 600,
                    color: activeTab === tab ? "var(--cream)" : "rgba(245,230,200,0.3)",
                  }}
                >
                  {tab === "ingredients" ? "Ingrédients" : "Valeurs Nutritionnelles"}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="tab-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px]"
                      style={{ background: "var(--red)" }}
                    />
                  )}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <AnimatePresence mode="wait">
            {activeTab === "ingredients" ? (
              <motion.div
                key="ingredients"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <div
                  className="text-[var(--cream)] opacity-70 text-lg leading-relaxed text-center"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  {product.ingredients}
                </div>
                <div className="mt-8 p-6 text-center" style={{ border: "1px solid rgba(245,230,200,0.06)", background: "rgba(245,230,200,0.02)" }}>
                  <div
                    className="text-[var(--gold)] text-sm uppercase tracking-widest"
                    style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}
                  >
                    🌿 Sans OGM · Sans Gluten · Vegan · Artisanal
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="nutrition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <div
                  className="p-8 max-w-md mx-auto"
                  style={{ border: "1px solid rgba(245,230,200,0.1)" }}
                >
                  <div
                    className="text-xl uppercase mb-6 text-[var(--cream)]"
                    style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
                  >
                    Valeurs pour {product.nutritionFacts.servingSize}
                  </div>
                  {[
                    ["Calories", product.nutritionFacts.calories],
                    ["Graisses totales", product.nutritionFacts.totalFat],
                    ["Sodium", product.nutritionFacts.sodium],
                    ["Glucides totaux", product.nutritionFacts.totalCarbs],
                    ["Sucres", product.nutritionFacts.sugars],
                    ["Protéines", product.nutritionFacts.protein],
                  ].map(([label, val]) => (
                    <div
                      key={label}
                      className="flex justify-between items-center py-3"
                      style={{ borderBottom: "1px solid rgba(245,230,200,0.06)" }}
                    >
                      <span
                        className="text-sm text-[var(--cream)] opacity-70"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {label}
                      </span>
                      <span
                        className="text-sm text-[var(--cream)]"
                        style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}
                      >
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ===== AUTRES PRODUITS ===== */}
      <section
        style={{ background: "rgba(245,230,200,0.03)", borderTop: "1px solid rgba(245,230,200,0.06)" }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div
              className="text-center uppercase text-[var(--cream)] mb-14"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(40px, 6vw, 70px)",
              }}
            >
              Vous aimerez aussi
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.filter(p => p.slug !== slug).map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 0.1}>
                <Link to={`/shop/${p.slug}`}>
                  <div
                    className="product-card flex gap-6 p-6 cursor-pointer group"
                    style={{
                      background: `${p.bgColor}55`,
                      border: `1px solid ${p.accentColor}20`,
                    }}
                  >
                    <div className="text-6xl animate-float select-none shrink-0">{p.emoji}</div>
                    <div>
                      <h3
                        className="text-2xl uppercase leading-tight text-[var(--cream)] mb-1"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {p.name}
                      </h3>
                      <p
                        className="text-sm text-[var(--cream)] opacity-50 mb-3"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                      >
                        {p.tagline}
                      </p>
                      <span
                        className="text-sm uppercase tracking-wider text-[var(--cream)] opacity-50 group-hover:opacity-100 transition-opacity"
                        style={{ fontFamily: "'Oswald', sans-serif" }}
                      >
                        Découvrir →
                      </span>
                    </div>
                    <div className="ml-auto text-right">
                      <div
                        className="text-xl text-[var(--cream)]"
                        style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
                      >
                        {p.price}
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
