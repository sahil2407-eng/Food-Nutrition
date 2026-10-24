/* =====================================================
   NutriGuard — Food Safety Quiz Data
   ===================================================== */

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What does the FSSAI logo on a packaged food product indicate?",
    options: [
      "The product is free from all pesticides and contaminants",
      "The manufacturer holds a valid food business licence under FSSAI regulations",
      "The product is certified organic",
      "Government laboratories have tested each batch of the product"
    ],
    correct: 1,
    explanation: "The FSSAI logo (and licence number) on packaging means the food business operator holds a valid licence or registration under the Food Safety and Standards Act, 2006. It does NOT mean each batch has been independently tested or that the product is guaranteed free from all contaminants. Always check that the licence number is real at foscos.fssai.gov.in."
  },
  {
    id: 2,
    question: "You open a packet of branded spice powder and notice an unusual smell and slightly different colour compared to what you normally buy. What is the MOST appropriate first action?",
    options: [
      "Add extra to compensate for any dilution",
      "Stop using it, note the batch number and expiry date, and contact the manufacturer or FSSAI",
      "Mix it with a fresh packet to correct the colour",
      "Taste a small amount to confirm your suspicion"
    ],
    correct: 1,
    explanation: "Stop using the product. Do not taste it to test for adulteration — this could be harmful. Note the batch number, best-before date, purchase details, and manufacturer information, then contact the brand's consumer helpline or report on the FSSAI Food Safety Connect portal. Laboratory testing is the only reliable way to confirm adulteration."
  },
  {
    id: 3,
    question: "A product label lists 'serving size: 30 g' and shows 180 kcal per serving. How many calories are in 100 g of this product?",
    options: [
      "180 kcal",
      "540 kcal",
      "600 kcal",
      "90 kcal"
    ],
    correct: 2,
    explanation: "Per 30 g = 180 kcal. Per 1 g = 180 ÷ 30 = 6 kcal. Per 100 g = 6 × 100 = 600 kcal. This calculation helps you compare products accurately when they use different serving sizes on their labels."
  },
  {
    id: 4,
    question: "Which of the following is a common simple home test that can detect adulteration of milk with water?",
    options: [
      "Boiling the milk for 10 minutes",
      "Placing a drop on a tilted smooth surface — pure milk flows slowly leaving a trail",
      "Checking the colour under ultraviolet light",
      "Adding lemon juice to the milk"
    ],
    correct: 1,
    explanation: "The 'drop test' is a traditional indicative method: a drop of pure milk on a tilted, smooth surface moves slowly and leaves a white trail, while milk heavily diluted with water flows quickly with little or no trail. However, this is only a rough indicator. Laboratory tests (lactometer reading, SNF measurement) are needed to confirm adulteration and are mandatory for legal action."
  },
  {
    id: 5,
    question: "The ingredient list on a food label always lists ingredients in which order?",
    options: [
      "Alphabetical order",
      "Descending order by weight (most to least)",
      "Order of nutritional importance",
      "Ascending order by weight (least to most)"
    ],
    correct: 1,
    explanation: "Under FSSAI regulations (and internationally under Codex Alimentarius), ingredients must be listed in descending order by weight at the time of manufacture. This means the ingredient listed first is present in the greatest amount. If sugar appears very early in the list, the product contains a lot of it."
  },
  {
    id: 6,
    question: "A 'best before' date on a packaged food means:",
    options: [
      "The food becomes immediately unsafe to eat after this date",
      "The food is guaranteed to be safe and at optimal quality up to this date, then quality may decline",
      "The product must be refrigerated after this date",
      "The product was manufactured on this date"
    ],
    correct: 1,
    explanation: "'Best before' (or 'best by') indicates the period during which the product should retain its optimal quality if stored correctly — it is NOT a safety cut-off. A 'use by' date (for perishables) is a safety date. After a 'best before' date, quality may have declined but the product may not be immediately unsafe. However, if in doubt, throw it out."
  },
  {
    id: 7,
    question: "Which additive code on an Indian food label indicates a synthetic food colour?",
    options: [
      "E300",
      "E102",
      "E440",
      "E500"
    ],
    correct: 1,
    explanation: "E102 (Tartrazine) is a synthetic yellow food dye. E300 is Vitamin C (ascorbic acid — an antioxidant), E440 is Pectin (a natural thickener), and E500 is Sodium Carbonate (a raising agent). Synthetic colours like E102, E110, E122, E124, E129 are permitted in limited amounts under FSSAI but some countries restrict them; children's foods in the EU require a warning label."
  },
  {
    id: 8,
    question: "Sodium on a nutrition label is relevant for which health concern?",
    options: [
      "Blood sugar management",
      "Blood pressure and cardiovascular health",
      "Bone density",
      "Vision health"
    ],
    correct: 1,
    explanation: "High sodium intake is strongly linked to high blood pressure (hypertension), which is a major risk factor for heart disease and stroke. FSSAI recommends adults consume less than 2,000 mg of sodium per day (equivalent to about 5 g of salt). Processed and packaged foods are often the primary source of excess sodium in the diet."
  },
  {
    id: 9,
    question: "If turmeric powder is mixed with lead chromate to enhance its yellow colour, what is the most reliable way to confirm this?",
    options: [
      "Looking at it under bright light",
      "Smelling the powder",
      "Laboratory chemical analysis",
      "The FSSAI logo on the pack proves it is unadulterated"
    ],
    correct: 2,
    explanation: "Lead chromate adulteration cannot be reliably confirmed by sight or smell. Laboratory analysis (such as the hydrochloric acid test or atomic absorption spectroscopy for lead) is the only reliable method. The FSSAI licence confirms the manufacturer is registered, not that every batch is free from adulteration. Report suspected adulteration to FSSAI through the Food Safety Connect portal or call 1800-112-100."
  },
  {
    id: 10,
    question: "What does 'trans fat' on a food label refer to, and why is it significant?",
    options: [
      "Naturally occurring fat in vegetables; it is beneficial for heart health",
      "Partially hydrogenated vegetable oil that raises LDL cholesterol and lowers HDL, increasing heart disease risk",
      "A type of fat found exclusively in dairy and red meat with no health implications",
      "A fat that is easily digested and has no calories"
    ],
    correct: 1,
    explanation: "Trans fats (mainly from partially hydrogenated oils / vanaspati) raise LDL (bad) cholesterol and lower HDL (good) cholesterol, significantly increasing the risk of heart disease. FSSAI has mandated that industrial trans fat content must not exceed 2% in oils and fats since 2022. WHO recommends eliminating industrial trans fats from the global food supply. Look for '0 g trans fat' on labels and avoid 'partially hydrogenated' in ingredient lists."
  }
];

window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
