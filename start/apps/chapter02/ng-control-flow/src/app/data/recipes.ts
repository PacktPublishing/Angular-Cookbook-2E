import { SkillLevel, RecipeType } from "../enums";
import { Recipe } from "../interfaces";

export const RECIPES: Recipe[] = [
  {
    id: 1,
    name: 'Biriyani',
    level: SkillLevel.Expert,
    description: 'Aromatic basmati rice and spiced chicken, garnished with caramelized onions, fresh mint, and lemon.',
    steps: [
      'Marinate chicken with yogurt and spices.',
      'Layer marinated chicken with parboiled basmati rice.',
      'Cook under low flame with sealed lid for the steam to infuse flavors.',
      'Garnish with fried onions, mint, and serve with raita.'
    ],
    image: '/assets/images/biriyani.png'
  },
  {
    id: 2,
    name: 'Meatballs',
    level: SkillLevel.Intermediate,
    description: 'Juicy halal beef meatballs in a savory tomato sauce, perfect with pasta or mashed potatoes.',
    steps: [
      'Mix ground halal beef with herbs and breadcrumbs.',
      'Form into balls and brown on all sides.',
      'Simmer in tomato sauce until cooked through.',
      'Sprinkle with parsley and serve with your choice of side.'
    ],
    image: '/assets/images/meatballs.png'
  },
  {
    id: 3,
    name: 'Margherita Pizza',
    level: SkillLevel.Beginner,
    description: 'Classic pizza with tomato sauce, mozzarella, and fresh basil on a crispy crust.',
    steps: [
      'Spread tomato sauce on pizza dough.',
      'Top with slices of mozzarella cheese.',
      'Bake until crust is golden and cheese is bubbly.',
      'Garnish with fresh basil leaves and a drizzle of olive oil before serving.'
    ],
    image: '/assets/images/pizza.png'
  },
  {
    id: 4,
    name: 'Spinach and Feta Pie',
    level: 'beginner',
    description: 'A savory pie with a flaky crust, filled with a rich mixture of spinach, feta cheese, and herbs.',
    steps: [
      'Preheat the oven to 350°F (175°C).',
      'Mix chopped spinach, crumbled feta, eggs, and seasoning.',
      'Layer phyllo dough in a pan, brushing each sheet with melted butter.',
      'Spread the spinach mixture over the dough.',
      'Cover with remaining phyllo, tucking in edges.',
      'Bake for 30-40 minutes until golden brown.'
    ],
    image: '/assets/images/spinach-feta-pie.png',
    type: RecipeType.Vegetarian
  },
  {
    id: 5,
    name: 'Seared Salmon with Lentils',
    level: 'intermediate',
    description: 'Pan-seared salmon fillets over a bed of warm, herbed lentils, accompanied by a lemon butter sauce.',
    steps: [
      'Season the salmon fillets and sear in a hot pan until golden.',
      'Simmer lentils with garlic, onion, and herbs until tender.',
      'Prepare a lemon butter sauce with white wine, lemon juice, and butter.',
      'Plate the lentils, top with the salmon, and drizzle with sauce.'
    ],
    image: '/assets/images/seared-salmon.png',
    type: RecipeType.GlutenFree
  },
  {
    id: 6,
    name: 'Duck Confit with Roasted Vegetables',
    level: 'expert',
    description: 'Slow-cooked duck legs until tender, served with a side of roasted seasonal vegetables.',
    steps: [
      'Cure duck legs with salt, garlic, and thyme overnight.',
      'Rinse the duck legs and slow cook in duck fat at low temperature for several hours.',
      'Roast a selection of vegetables like carrots, parsnips, and beets.',
      'Crisp the duck skin in a hot oven and serve with the vegetables.'
    ],
    image: '/assets/images/duck-confit.png',
    type: RecipeType.GlutenFree
  }
]
