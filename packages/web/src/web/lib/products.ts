export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: string;
  priceNum: number;
  bgColor: string;
  accentColor: string;
  textColor: string;
  emoji: string;
  tags: string[];
  pairsWith: string[];
  ingredients: string;
  nutritionFacts: {
    servingSize: string;
    calories: string;
    totalFat: string;
    sodium: string;
    totalCarbs: string;
    sugars: string;
    protein: string;
  };
  tasteTags: { label: string; intensity: number }[];
  imageColor: string;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "crushed-cherry-garlic",
    name: "Crushed Cherry Garlic",
    subtitle: "Cerise & Ail",
    tagline: "Fruité. Piquant. Mémorable.",
    description:
      "Une sauce audacieuse construite sur de vraies cerises, de l'ail rôti et une chaleur qui monte sans prévenir.",
    longDescription:
      "La Crushed Cherry Garlic ne s'excuse de rien. De vraies cerises Bing, lentement réduites avec de l'ail rôti et des piments, créent une profondeur que les sauces industrielles ne peuvent pas imiter. Sucrée au départ, fumée au milieu, avec une fin qui s'attarde.",
    price: "12,99 €",
    priceNum: 12.99,
    bgColor: "#7a1020",
    accentColor: "#cc0022",
    textColor: "#f5e6c8",
    emoji: "🍒",
    tags: ["FRUITÉ", "PIQUANT", "SUCRÉ"],
    pairsWith: ["Côtes levées", "Poulet grillé", "Burgers", "Fromages affinés"],
    ingredients:
      "Cerises Bing, ail rôti, vinaigre de cidre de pomme, miel brut, sauce soja tamari, piments chipotle, oignons, sel de mer, poivre noir",
    nutritionFacts: {
      servingSize: "2 c. à soupe (30ml)",
      calories: "35",
      totalFat: "0g",
      sodium: "220mg",
      totalCarbs: "9g",
      sugars: "7g",
      protein: "0g",
    },
    tasteTags: [
      { label: "Fruité", intensity: 90 },
      { label: "Umami", intensity: 65 },
      { label: "Fumé", intensity: 55 },
      { label: "Chaleur", intensity: 50 },
    ],
    imageColor: "#8b0000",
  },
  {
    id: "2",
    slug: "crushed-habanero-garlic",
    name: "Crushed Habanero Garlic",
    subtitle: "Habanero & Ail",
    tagline: "Intense. Fumé. En feu.",
    description:
      "Habaneros frais, ail confit et épices fumées. Pour ceux qui savent ce qu'ils font.",
    longDescription:
      "Faite pour les amateurs de chaleur sérieuse. Des habaneros entiers, de l'ail confit lentement et des épices fumées se combinent pour créer une sauce qui ne recule pas. Assez de chaleur pour vous réveiller, assez de saveur pour vous faire revenir.",
    price: "12,99 €",
    priceNum: 12.99,
    bgColor: "#7a2800",
    accentColor: "#e05a00",
    textColor: "#f5e6c8",
    emoji: "🌶️",
    tags: ["INTENSE", "FUMÉ", "ENFLAMMÉ"],
    pairsWith: ["Ailes de poulet", "Tacos", "Seafood", "Pizza"],
    ingredients:
      "Habaneros frais, ail confit, vinaigre de cidre de pomme, miel brut, tomates séchées, paprika fumé, oignons, sel de mer",
    nutritionFacts: {
      servingSize: "2 c. à soupe (30ml)",
      calories: "25",
      totalFat: "0g",
      sodium: "190mg",
      totalCarbs: "6g",
      sugars: "4g",
      protein: "0g",
    },
    tasteTags: [
      { label: "Chaleur", intensity: 95 },
      { label: "Fumé", intensity: 80 },
      { label: "Umami", intensity: 60 },
      { label: "Fruité", intensity: 30 },
    ],
    imageColor: "#c04a00",
  },
  {
    id: "3",
    slug: "crushed-pineapple-sriracha",
    name: "Crushed Pineapple Sriracha",
    subtitle: "Ananas & Sriracha",
    tagline: "Tropical. Sucré. Piquant.",
    description:
      "Ananas frais, sriracha artisanale et gingembre. La sauce qui surprend à chaque fois.",
    longDescription:
      "L'ananas frais rencontre la chaleur vive du sriracha dans cette sauce qui refuse de choisir entre le sucré et le piquant. Du gingembre frais et du citron vert apportent une acidité vive qui fait ressortir chaque saveur. Parfaite sur tout ce que vous aimez.",
    price: "12,99 €",
    priceNum: 12.99,
    bgColor: "#5a4000",
    accentColor: "#b8860b",
    textColor: "#f5e6c8",
    emoji: "🍍",
    tags: ["TROPICAL", "SUCRÉ", "PIQUANT"],
    pairsWith: ["Poisson", "Riz grillé", "Satay", "Bao buns"],
    ingredients:
      "Ananas frais, piments sriracha, gingembre frais, vinaigre de riz, citron vert, miel brut, ail, échalotes, sel de mer",
    nutritionFacts: {
      servingSize: "2 c. à soupe (30ml)",
      calories: "40",
      totalFat: "0g",
      sodium: "175mg",
      totalCarbs: "10g",
      sugars: "8g",
      protein: "0g",
    },
    tasteTags: [
      { label: "Tropical", intensity: 95 },
      { label: "Sucré", intensity: 80 },
      { label: "Chaleur", intensity: 60 },
      { label: "Acidité", intensity: 70 },
    ],
    imageColor: "#b8860b",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
