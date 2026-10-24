# NutriGuard — Smart Food & Nutrition

A complete, mobile-first, accessible nutrition and food safety website for Indian consumers.

## 🚀 Quick Start

No build tools or server required for the core site. Simply open `index.html` in any modern browser.

```bash
# Option 1: Open directly (works for most features)
# Double-click index.html  —OR—  right-click → Open with → browser

# Option 2: Serve locally (recommended — avoids any CORS/module issues)
# Using Python 3:
python -m http.server 8080
# Then open: http://localhost:8080

# Using Node.js (npx):
npx serve .
# Then open: http://localhost:3000

# Using VS Code Live Server extension:
# Right-click index.html → Open with Live Server
```

## 📁 Project Structure

```
Food Nutrition/
├── index.html                 # Homepage
├── nutrition-checker.html     # Nutrition facts + serving calc
├── label-decoder.html         # Food label explainer + interactive decoder
├── food-safety.html           # Adulteration awareness hub
├── packaging-risk.html        # Interactive packaging risk checklist
├── compare.html               # Side-by-side product comparison
├── nutrient-hub.html          # Nutrient knowledge database
├── meal-ideas.html            # Budget Indian meal ideas
├── quiz.html                  # Food safety quiz (10 questions)
├── search.html                # Product search + barcode lookup
├── about.html                 # About NutriGuard
├── contact.html               # Contact / Feedback form
├── privacy.html               # Privacy policy
├── disclaimer.html            # Full disclaimer
├── 404.html                   # Custom 404 page
├── favicon.svg                # SVG favicon (green + broccoli)
├── css/
│   └── style.css              # All styles (CSS variables, neumorphism, responsive)
└── js/
    ├── components.js          # Shared header/footer, theme, nav, scroll
    ├── nutrition-data.js      # Demo nutrition database (15 foods)
    └── quiz-data.js           # 10 quiz questions with explanations
```

## ✨ Features

| Feature | Status | Notes |
|---|---|---|
| Homepage with hero, search, feature cards | ✅ Working | |
| Nutrition Checker (calories, macros, micros) | ✅ Working | Demo data |
| Serving-size calculations | ✅ Working | Per 100g ↔ Per Serving |
| %Daily Value bars (colour-coded) | ✅ Working | |
| Food Label Decoder | ✅ Working | Interactive ingredient decoder |
| Food Safety & Adulteration Hub | ✅ Working | FSSAI links, home tests (indicative) |
| Packaging Risk Checklist | ✅ Working | 20-item interactive checklist |
| Product Comparison | ✅ Working | Per 100g / per serving toggle |
| Nutrient Knowledge Hub | ✅ Working | 18 nutrients with filter |
| Budget Indian Meal Ideas | ✅ Working | 9 meals with filter & table |
| Food Safety Quiz | ✅ Working | 10 questions, score, explanations |
| Product Search | ✅ Working | Client-side search over demo DB |
| Barcode Lookup | ⚠️ Demo | 5 demo barcodes; not a live API |
| Label Image OCR | ⚠️ Demo | UI only; requires backend for real OCR |
| Dark / Light Theme Toggle | ✅ Working | OS preference + localStorage |
| Scroll Progress Bar | ✅ Working | |
| Back to Top Button | ✅ Working | |
| Mobile Hamburger Menu | ✅ Working | Keyboard + focus accessible |
| Custom 404 Page | ✅ Working | |
| SEO meta + Open Graph | ✅ Working | Every page |

## 🎨 Design System

- **Palette**: Green (`#2e7d32`, `#4caf50`, `#8bc34a`), White, Warm off-white (`#f5f5f0`), Charcoal (`#212121`). **No purple.**
- **Neumorphism**: Applied to cards, search fields, quiz card, and buttons via CSS custom properties
- **Typography**: Inter (body) + Poppins (headings) from Google Fonts
- **Themes**: Light and dark, respects `prefers-color-scheme`, stored in `localStorage`

## ♿ Accessibility

- WCAG 2.2 AA targets
- Semantic HTML, proper heading hierarchy
- Keyboard navigation for all interactive elements
- Visible focus states on all controls
- ARIA labels, roles, `aria-expanded`, `aria-live` regions
- `prefers-reduced-motion` respected
- Descriptive alt text on all images
- Colour is never the sole indicator of status

## 📊 Data Sources

All nutrition data shown is **curated demo data** based on:
- **ICMR-NIN** (Indian Council of Medical Research – National Institute of Nutrition) nutritive value tables
- **USDA FoodData Central** (https://fdc.nal.usda.gov/)
- **FSSAI Food Safety Standards** (https://www.fssai.gov.in/)

**Always verify values with actual product labels before making dietary decisions.**

## ⚠️ Important Disclaimers

1. **Not medical advice** — For dietary guidance, consult a registered dietitian
2. **Demo data only** — 15 foods in the built-in database; not a comprehensive food database
3. **No adulteration detection** — NutriGuard cannot confirm or rule out food adulteration
4. **No live barcode API** — Barcode lookup uses 5 hardcoded demo entries
5. **No OCR backend** — Image label reading requires server-side integration (see below)
6. **Not affiliated with FSSAI, ICMR, or WHO** — External links provided for user convenience

## 🔌 API / Backend Requirements (for production)

| Feature | What's needed | Suggested service |
|---|---|---|
| Comprehensive food database | Backend + DB or API key | Open Food Facts API (free), USDA FoodData Central API (free) |
| Barcode lookup | API key from a barcode database | Open Food Facts, Edamam, Nutritionix |
| Label image OCR | Server-side OCR | Google Cloud Vision API, AWS Textract, Tesseract.js (Node) |
| Contact form | Backend endpoint or service | Formspree, Netlify Forms, EmailJS |
| Analytics | Optional tracking | Plausible (privacy-friendly) |

**API keys must NEVER be exposed in client-side code.** Use a backend proxy or serverless function.

## 🧪 Testing Checklist

After opening the site, verify:
- [ ] Theme toggle works (☀️/🌙) and persists on reload
- [ ] Mobile hamburger opens/closes (below 900px width)
- [ ] All 8 nav links navigate correctly
- [ ] All footer links go to valid pages or external URLs (open in new tab)
- [ ] Nutrition Checker: select a food, change serving size → values recalculate
- [ ] Label Decoder: paste ingredients → allergens/additives are highlighted
- [ ] Food Safety Hub: all external links open (FSSAI, WHO etc.)
- [ ] Packaging Risk Checklist: tick items → risk score updates live; Reset works
- [ ] Product Comparison: select 2 foods → winner is highlighted
- [ ] Quiz: 10 questions → results screen → Take Again resets
- [ ] Search: type 'oats' → result appears; barcode '8901030879778' → finds oats
- [ ] Scroll progress bar fills as you scroll
- [ ] Back to Top button appears after scrolling 300px
- [ ] 404 page: navigate to a non-existent URL (add /foo.html in address bar)
- [ ] No horizontal scrolling at 320px width

## 📝 Extending the Food Database

Add entries to `js/nutrition-data.js` following the existing schema:
```js
{
  id: "unique-id",
  name: "Display Name",
  category: "Category",
  servingSize: 100,       // grams
  servingUnit: "g",
  per100g: {
    calories: 0, protein: 0, carbs: 0, fat: 0,
    saturatedFat: 0, sugar: 0, fibre: 0, sodium: 0,
    // ... add any vitamins/minerals as needed
  },
  allergens: [],
  certifications: [],
  note: "Source of data"
}
```
