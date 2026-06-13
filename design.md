# Bucks Sauce — Design System

## Brand
Marque de sauce BBQ artisanale, petit batch, ingrédients réels. Personnalité : tranchante, authentique, brute, directe.
Version française du site.

## Couleurs
```
--black: #0a0a0a        (fond principal)
--cream: #f5e6c8        (fond sections claires, textes sur noir)
--red: #cc2200          (CTA, accents feu)
--gold: #b8860b         (accents or/moutarde, badges)
--cherry: #8b0000       (rouge carmin pour Cherry Garlic)
--orange: #e05a00       (pour Habanero)
--yellow: #f5a623       (pour Pineapple Sriracha)
--white: #ffffff
```

## Typographie
- **Display/Hero** : Bebas Neue (Google Fonts) — condensed, uppercase, très grande taille (80-200px)
- **Titres** : Oswald bold — uppercase, tracking serré
- **Corps** : Inter — clean, lisible
- **Accent** : Bebas Neue italic ou Oswald 300

## Layout
- Fond noir dominant
- Sections alternées noir/crème
- Grandes marges, overlap d'éléments
- Grid breaking — éléments qui sortent du flux

## Animations
- **Lenis** : smooth scroll
- **GSAP** : marquee horizontal infini, parallaxe fruits, hero text reveal
- **Framer Motion** : scroll reveal staggered, accordion expand, product transition
- **Three.js** : blob/sphere flottante sur hero (optionnel si perf ok)
- Texte qui apparaît lettre par lettre ou ligne par ligne
- Fruits PNG qui flottent en parallaxe (translate Y au scroll)

## Produits
1. **Crushed Cherry Garlic** — fond carmin #8b0000, emoji cerise, "FRUITÉ + PIQUANT + SUCRÉ"
2. **Crushed Habanero Garlic** — fond orange #e05a00, emoji piment, "INTENSE + FUMÉ + ENFLAMMÉ"  
3. **Crushed Pineapple Sriracha** — fond or #b8860b, emoji ananas, "TROPICAL + SUCRÉ + PIQUANT"

## Pages
- `/` : homepage — hero, marquee, "LA MEILLEURE SAUCE", produits vedettes, badges, footer
- `/shop` : grille des 3 produits
- `/shop/:slug` : page produit détaillée — split layout, profil gustatif, ingrédients, nutrition
