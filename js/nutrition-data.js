/* =====================================================
   NutriGuard — Nutrition Demo Database
   Source: ICMR-NIN / USDA FoodData (curated demo data)
   All values per 100g unless noted
   ===================================================== */

const NUTRITION_DB = [
  {
    id: "whole-wheat-bread",
    name: "Whole Wheat Bread",
    category: "Grains",
    servingSize: 30,
    servingUnit: "g (1 slice)",
    per100g: {
      calories: 247, protein: 9.0, carbs: 44.3, fat: 3.4, saturatedFat: 0.6,
      sugar: 4.2, fibre: 6.8, sodium: 400, potassium: 248,
      vitaminB1: 0.3, vitaminB3: 3.6, iron: 2.5, calcium: 73, magnesium: 76,
      zinc: 1.8
    },
    allergens: ["Gluten", "Wheat"],
    certifications: ["FSSAI"],
    healthClaim: "Good source of dietary fibre",
    note: "Demo data based on ICMR-NIN tables"
  },
  {
    id: "brown-rice",
    name: "Brown Rice (Cooked)",
    category: "Grains",
    servingSize: 180,
    servingUnit: "g (1 cup cooked)",
    per100g: {
      calories: 111, protein: 2.6, carbs: 23.0, fat: 0.9, saturatedFat: 0.2,
      sugar: 0.4, fibre: 1.8, sodium: 5, potassium: 79,
      vitaminB1: 0.1, vitaminB3: 1.5, iron: 0.5, magnesium: 44, zinc: 0.6
    },
    allergens: [],
    certifications: [],
    note: "Demo data based on USDA FoodData Central"
  },
  {
    id: "moong-dal",
    name: "Moong Dal (Cooked)",
    category: "Legumes",
    servingSize: 150,
    servingUnit: "g (1 bowl)",
    per100g: {
      calories: 105, protein: 7.0, carbs: 19.1, fat: 0.4, saturatedFat: 0.1,
      sugar: 1.5, fibre: 5.3, sodium: 2, potassium: 266,
      folate: 159, iron: 1.4, magnesium: 36, calcium: 27, zinc: 0.8
    },
    allergens: [],
    certifications: [],
    note: "Demo data based on ICMR-NIN"
  },
  {
    id: "whole-milk",
    name: "Full Cream Milk",
    category: "Dairy",
    servingSize: 240,
    servingUnit: "ml (1 glass)",
    per100g: {
      calories: 61, protein: 3.2, carbs: 4.8, fat: 3.3, saturatedFat: 2.1,
      sugar: 4.8, fibre: 0, sodium: 44, potassium: 132,
      calcium: 113, vitaminD: 0.1, vitaminB12: 0.4, vitaminA: 46, phosphorus: 87
    },
    allergens: ["Milk", "Lactose"],
    certifications: ["FSSAI"],
    note: "Demo data based on ICMR-NIN"
  },
  {
    id: "banana",
    name: "Banana",
    category: "Fruits",
    servingSize: 118,
    servingUnit: "g (1 medium)",
    per100g: {
      calories: 89, protein: 1.1, carbs: 22.8, fat: 0.3, saturatedFat: 0.1,
      sugar: 12.2, fibre: 2.6, sodium: 1, potassium: 358,
      vitaminB6: 0.4, vitaminC: 8.7, folate: 20, magnesium: 27
    },
    allergens: [],
    certifications: [],
    note: "Demo data based on USDA FoodData Central"
  },
  {
    id: "spinach",
    name: "Spinach (Raw)",
    category: "Vegetables",
    servingSize: 30,
    servingUnit: "g (1 handful)",
    per100g: {
      calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, saturatedFat: 0.1,
      sugar: 0.4, fibre: 2.2, sodium: 79, potassium: 558,
      vitaminA: 469, vitaminC: 28, vitaminK: 483, iron: 2.7, calcium: 99,
      folate: 194, magnesium: 79
    },
    allergens: [],
    certifications: [],
    note: "Demo data based on USDA FoodData Central"
  },
  {
    id: "egg",
    name: "Egg (Whole, Boiled)",
    category: "Protein",
    servingSize: 50,
    servingUnit: "g (1 medium egg)",
    per100g: {
      calories: 155, protein: 12.6, carbs: 1.1, fat: 10.6, saturatedFat: 3.1,
      sugar: 1.1, fibre: 0, sodium: 124, potassium: 126,
      vitaminB12: 1.1, vitaminD: 2.0, vitaminA: 149, iron: 1.8,
      calcium: 50, choline: 294, selenium: 15.6
    },
    allergens: ["Egg"],
    certifications: [],
    note: "Demo data based on USDA FoodData Central"
  },
  {
    id: "chicken-breast",
    name: "Chicken Breast (Cooked)",
    category: "Protein",
    servingSize: 100,
    servingUnit: "g",
    per100g: {
      calories: 165, protein: 31.0, carbs: 0, fat: 3.6, saturatedFat: 1.0,
      sugar: 0, fibre: 0, sodium: 74, potassium: 256,
      vitaminB3: 13.4, vitaminB6: 0.9, vitaminB12: 0.3, phosphorus: 220,
      selenium: 27.6, zinc: 1.0
    },
    allergens: [],
    certifications: [],
    note: "Demo data based on ICMR-NIN / USDA"
  },
  {
    id: "oats",
    name: "Rolled Oats (Dry)",
    category: "Grains",
    servingSize: 40,
    servingUnit: "g (½ cup dry)",
    per100g: {
      calories: 389, protein: 16.9, carbs: 66.3, fat: 6.9, saturatedFat: 1.2,
      sugar: 0.99, fibre: 10.6, sodium: 2, potassium: 429,
      vitaminB1: 0.46, vitaminB5: 1.35, iron: 4.7, magnesium: 177,
      zinc: 3.97, phosphorus: 523, manganese: 4.9
    },
    allergens: ["Gluten (may contain)"],
    certifications: [],
    healthClaim: "May help lower cholesterol",
    note: "Demo data based on USDA FoodData Central"
  },
  {
    id: "peanuts",
    name: "Roasted Peanuts (Unsalted)",
    category: "Nuts & Seeds",
    servingSize: 28,
    servingUnit: "g (small handful)",
    per100g: {
      calories: 585, protein: 23.7, carbs: 21.5, fat: 49.7, saturatedFat: 6.9,
      sugar: 4.4, fibre: 8.0, sodium: 6, potassium: 658,
      vitaminB3: 13.1, vitaminE: 8.3, magnesium: 168, phosphorus: 358, zinc: 3.3
    },
    allergens: ["Peanuts"],
    certifications: [],
    note: "Demo data based on USDA FoodData Central"
  },
  {
    id: "masoor-dal",
    name: "Masoor Dal (Red Lentils, Cooked)",
    category: "Legumes",
    servingSize: 150,
    servingUnit: "g (1 bowl)",
    per100g: {
      calories: 116, protein: 9.0, carbs: 20.1, fat: 0.4, saturatedFat: 0.1,
      sugar: 1.8, fibre: 7.9, sodium: 2, potassium: 369,
      iron: 3.3, folate: 181, magnesium: 36, zinc: 1.3
    },
    allergens: [],
    certifications: [],
    note: "Demo data based on ICMR-NIN"
  },
  {
    id: "full-fat-yogurt",
    name: "Full Fat Yogurt (Plain)",
    category: "Dairy",
    servingSize: 150,
    servingUnit: "g (small bowl)",
    per100g: {
      calories: 61, protein: 3.5, carbs: 4.7, fat: 3.3, saturatedFat: 2.1,
      sugar: 4.7, fibre: 0, sodium: 46, potassium: 141,
      calcium: 121, vitaminB12: 0.75, phosphorus: 95, riboflavin: 0.14
    },
    allergens: ["Milk"],
    certifications: ["FSSAI"],
    note: "Demo data based on ICMR-NIN"
  },
  {
    id: "sweet-biscuit",
    name: "Glucose Biscuits (Packaged)",
    category: "Packaged Snacks",
    servingSize: 30,
    servingUnit: "g (~4 biscuits)",
    per100g: {
      calories: 455, protein: 7.5, carbs: 75.0, fat: 14.5, saturatedFat: 6.8,
      sugar: 22.0, fibre: 1.5, sodium: 310, potassium: 90,
      iron: 2.0, calcium: 45
    },
    allergens: ["Wheat", "Gluten", "Milk"],
    certifications: ["FSSAI"],
    additives: ["E322 (Lecithin)", "E500ii (Sodium Bicarbonate)", "Artificial Flavour"],
    note: "Representative demo values — check actual product label"
  },
  {
    id: "potato-chips",
    name: "Potato Chips (Salted)",
    category: "Packaged Snacks",
    servingSize: 30,
    servingUnit: "g (~1 small pack)",
    per100g: {
      calories: 536, protein: 7.0, carbs: 53.0, fat: 34.6, saturatedFat: 8.5,
      sugar: 0.5, fibre: 3.8, sodium: 525, potassium: 1672,
      vitaminB6: 0.29, vitaminC: 31.1
    },
    allergens: ["May contain Milk", "May contain Gluten"],
    certifications: ["FSSAI"],
    additives: ["E627 (Disodium Guanylate)", "E631 (Disodium Inosinate)", "E621 (MSG)"],
    note: "Representative demo values — check actual product label"
  },
  {
    id: "apple",
    name: "Apple (Fresh)",
    category: "Fruits",
    servingSize: 182,
    servingUnit: "g (1 medium)",
    per100g: {
      calories: 52, protein: 0.3, carbs: 13.8, fat: 0.2, saturatedFat: 0,
      sugar: 10.4, fibre: 2.4, sodium: 1, potassium: 107,
      vitaminC: 4.6, vitaminK: 3.2
    },
    allergens: [],
    certifications: [],
    note: "Demo data based on USDA FoodData Central"
  }
];

/* Daily Value references (FSSAI / Indian context, adults) */
const DAILY_VALUES = {
  calories: 2000,
  protein: 60,
  carbs: 300,
  fat: 65,
  saturatedFat: 20,
  sugar: 50,
  fibre: 30,
  sodium: 2300,
  potassium: 4700,
  calcium: 1000,
  iron: 17,
  vitaminC: 40,
  vitaminA: 900,
  vitaminD: 15,
  vitaminB12: 2.4,
  folate: 400,
  magnesium: 340,
  zinc: 12,
  phosphorus: 700
};

const NUTRIENT_DISPLAY_NAMES = {
  calories: "Calories",
  protein: "Protein",
  carbs: "Total Carbohydrates",
  fat: "Total Fat",
  saturatedFat: "Saturated Fat",
  sugar: "Total Sugars",
  fibre: "Dietary Fibre",
  sodium: "Sodium",
  potassium: "Potassium",
  calcium: "Calcium",
  iron: "Iron",
  vitaminC: "Vitamin C",
  vitaminA: "Vitamin A",
  vitaminD: "Vitamin D",
  vitaminB12: "Vitamin B12",
  vitaminB1: "Vitamin B1 (Thiamine)",
  vitaminB3: "Vitamin B3 (Niacin)",
  vitaminB6: "Vitamin B6",
  vitaminK: "Vitamin K",
  vitaminE: "Vitamin E",
  folate: "Folate",
  magnesium: "Magnesium",
  zinc: "Zinc",
  phosphorus: "Phosphorus",
  selenium: "Selenium",
  manganese: "Manganese",
  choline: "Choline"
};

const NUTRIENT_UNITS = {
  calories: "kcal", protein: "g", carbs: "g", fat: "g", saturatedFat: "g",
  sugar: "g", fibre: "g", sodium: "mg", potassium: "mg", calcium: "mg",
  iron: "mg", vitaminC: "mg", vitaminA: "µg", vitaminD: "µg", vitaminB12: "µg",
  vitaminB1: "mg", vitaminB3: "mg", vitaminB6: "mg", vitaminK: "µg",
  vitaminE: "mg", folate: "µg", magnesium: "mg", zinc: "mg",
  phosphorus: "mg", selenium: "µg", manganese: "mg", choline: "mg"
};

/**
 * Calculate nutrition for a given serving size
 * @param {Object} per100g - nutrition per 100g
 * @param {number} servingG - serving in grams
 * @returns {Object} calculated nutrition per serving
 */
function calcServing(per100g, servingG) {
  const result = {};
  for (const [k, v] of Object.entries(per100g)) {
    result[k] = parseFloat(((v * servingG) / 100).toFixed(2));
  }
  return result;
}

/**
 * Get %DV for a nutrient
 */
function getDV(nutrient, value) {
  const dv = DAILY_VALUES[nutrient];
  if (!dv) return null;
  return Math.round((value / dv) * 100);
}

/**
 * Search foods by name or category
 */
function searchFoods(query) {
  if (!query || query.trim().length < 1) return NUTRITION_DB;
  const q = query.toLowerCase().trim();
  return NUTRITION_DB.filter(f =>
    f.name.toLowerCase().includes(q) ||
    f.category.toLowerCase().includes(q)
  );
}

window.NUTRITION_DB = NUTRITION_DB;
window.DAILY_VALUES = DAILY_VALUES;
window.NUTRIENT_DISPLAY_NAMES = NUTRIENT_DISPLAY_NAMES;
window.NUTRIENT_UNITS = NUTRIENT_UNITS;
window.calcServing = calcServing;
window.getDV = getDV;
window.searchFoods = searchFoods;
