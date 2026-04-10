# 🛒 Snackriti — Full-Stack Ecommerce Website

> A production-ready, fully responsive ecommerce platform built with React, TypeScript, Tailwind CSS, Redux Toolkit, and Vite.

**Live Demo:** [snackriti.netlify.app](https://snackriti.netlify.app)  
**GitHub:** [github.com/ajitsingh201/ecommerce-website-snackriti](https://github.com/ajitsingh201/ecommerce-website-snackriti)

---

## 📋 Table of Contents

- [English Documentation](#-english-documentation)
  - [Project Overview](#project-overview)
  - [Tech Stack](#tech-stack)
  - [Folder Structure](#folder-structure)
  - [Features](#features)
  - [Pages & Routing](#pages--routing)
  - [State Management](#state-management)
  - [Components Guide](#components-guide)
  - [How to Run Locally](#how-to-run-locally)
  - [How to Deploy on Netlify](#how-to-deploy-on-netlify)
- [Hinglish Documentation](#-hinglish-documentation-हिंगलिश)

---

---

# 🇬🇧 ENGLISH DOCUMENTATION

---

## Project Overview

**Snackriti** is a multi-category Indian ecommerce website that sells Healthy Snacks, Dry Fruits, Beauty Products, Cosmetics, Fashion, and Beverages. The project is built entirely with modern frontend technologies — no backend, no database — making it a perfect portfolio project or starter template for a real ecommerce business.

The website includes everything a real ecommerce platform needs:
- A beautiful homepage with animated sliders
- A fully functional shopping cart using Redux
- Multi-step checkout with UPI QR code, Razorpay, and COD payment options
- User authentication UI (Login & Signup)
- Product filtering, sorting, and search with debounce
- All legal/policy pages
- Fully responsive on mobile, tablet, and desktop

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | 19.x | UI library |
| **TypeScript** | 5.9.x | Type safety |
| **Vite** | 7.x | Build tool & dev server |
| **Tailwind CSS** | 4.x | Utility-first styling |
| **Redux Toolkit** | 2.x | Cart state management |
| **React Router DOM** | 7.x | Client-side routing |
| **React Hook Form** | 7.x | Form handling & validation |
| **Swiper.js** | 12.x | Hero slider & product carousels |
| **React Icons** | 5.x | Icon library |
| **Axios** | 1.x | HTTP client (ready for API) |
| **Firebase** | 12.x | Auth (structure ready) |

---

## Folder Structure

```
snackriti/
├── public/
│   ├── images/              # Product & slider images
│   └── favicon/             # Site favicon
│
├── src/
│   ├── components/
│   │   ├── cart/            # CartItem, CartSummary
│   │   ├── checkout/        # AddressForm, CheckoutForm
│   │   ├── forms/           # ContactForm
│   │   ├── home/            # Hero, CategorySection, ProductSlider,
│   │   │                    # WhySnackriti, Testimonials, Newsletter
│   │   ├── layout/          # Navbar, Footer, MainLayout, Container
│   │   ├── product/         # ProductCard, ProductFilters,
│   │   │                    # ProductGallery, RelatedProducts
│   │   └── ui/              # Button, Input, Badge, Loader
│   │
│   ├── data/
│   │   └── products.ts      # 24 mock products + 6 categories
│   │
│   ├── hooks/
│   │   └── useDebounce.ts   # Custom debounce hook for search
│   │
│   ├── pages/
│   │   ├── Auth/            # LoginPage, SignupPage
│   │   ├── Cart/            # CartPage
│   │   ├── Checkout/        # CheckoutPage
│   │   ├── Company/         # AboutPage, WhyUsPage, ContactPage
│   │   ├── Home/            # HomePage
│   │   ├── Policies/        # PrivacyPolicy, RefundPolicy,
│   │   │                    # ShippingPolicy, TermsPage
│   │   └── Shop/            # AllProductsPage, CategoryPage, ProductPage
│   │
│   ├── routes/
│   │   └── AppRoutes.tsx    # All route definitions
│   │
│   ├── store/
│   │   ├── cartSlice.ts     # Redux cart logic + selectors
│   │   └── index.ts         # Redux store configuration
│   │
│   ├── types/
│   │   └── product.ts       # TypeScript interfaces
│   │
│   ├── App.tsx              # Root component
│   ├── main.tsx             # Entry point + Redux Provider
│   └── index.css            # Global CSS + Tailwind imports
│
├── netlify.toml             # Netlify build config + SPA redirects
└── package.json
```

---

## Features

### 🏠 Homepage
- **Hero Slider** — Auto-sliding banner with 4 slides using Swiper.js Autoplay
- **Category Section** — 5 featured categories with hover zoom effect, navigates to `/category/:slug`
- **All Categories Grid** — 20 icon-based categories from a wide product range
- **Product Slider** — Featured products with discount badge, Add to Cart, autoplay carousel
- **Why Snackriti** — 3 USP cards with icons and hover animations
- **Testimonials** — Customer reviews in a Swiper carousel
- **Newsletter** — Email subscription section

### 🛍️ Shop
- **All Products Page** — Full product grid with sidebar filters
- **Category Page** — Filtered view with hero banner per category
- **Product Detail Page** — Gallery, pricing, quantity selector, Add to Cart, Buy Now, related products
- **Search** — Debounced search (300ms) across name, category, and keywords
- **Filters** — Category radio, max price slider, sort (A-Z, Z-A, price low/high), in-stock toggle
- **Reset Filters** — One-click reset all filters

### 🛒 Cart
- Add / Remove / Update quantity of products
- Real-time subtotal calculation
- Free shipping above ₹499, else ₹49
- Persistent cart count in Navbar (live from Redux)
- Empty cart state with CTA

### 💳 Checkout
- **Step 1 — Address Form** — Full validation with react-hook-form, Indian states dropdown
- **Step 2 — Payment**
  - **UPI / QR Code** — Dynamic QR code generated via `api.qrserver.com`, copyable UPI ID, supported apps list
  - **Razorpay** — Cards, Net Banking, Wallets with payment logos
  - **Cash on Delivery** — With ₹25 COD handling fee
- Order success screen with order ID

### 🔐 Authentication
- Login page with email/password + Google placeholder
- Signup page with full validation (name, phone, email, password, confirm)
- Form validation using react-hook-form

### 📄 Policy Pages
- Privacy Policy
- Refund & Return Policy
- Shipping Policy
- Terms & Conditions

### 📞 Company Pages
- About Us — mission, team, journey timeline
- Why Us — 6 feature cards + stats
- Contact — form with EmailJS-ready structure + contact info

---

## Pages & Routing

| Route | Page | Description |
|---|---|---|
| `/` | HomePage | Main landing page |
| `/products` | AllProductsPage | All products with filters |
| `/category/:slug` | CategoryPage | Filtered by category |
| `/product/:slug` | ProductPage | Product detail |
| `/cart` | CartPage | Shopping cart |
| `/checkout` | CheckoutPage | Multi-step checkout |
| `/login` | LoginPage | User login |
| `/signup` | SignupPage | User registration |
| `/about` | AboutPage | About Snackriti |
| `/why-us` | WhyUsPage | Why choose us |
| `/contact` | ContactPage | Contact form |
| `/privacy` | PrivacyPolicy | Privacy policy |
| `/refund` | RefundPolicy | Refund & returns |
| `/shipping` | ShippingPolicy | Shipping info |
| `/terms` | TermsPage | Terms & conditions |

All routes are wrapped inside `MainLayout` so Navbar and Footer appear on every page.

---

## State Management

Cart state is managed with **Redux Toolkit**:

```
store/
├── cartSlice.ts     →  addToCart, removeFromCart, updateQuantity, clearCart
└── index.ts         →  configureStore({ cart: cartReducer })
```

**Selectors available:**
- `selectCartItems` — full array of cart items
- `selectCartCount` — total quantity (shown in Navbar badge)
- `selectCartTotal` — total price (discounted prices applied)

The Redux `<Provider>` wraps the entire app in `main.tsx`.

---

## Components Guide

### ProductCard
Reusable card used in AllProductsPage, CategoryPage, RelatedProducts.
- Shows image, category tag, name, star rating, price with discount
- Add to Cart button → dispatches to Redux, shows green ✓ feedback for 1.8s
- Clicking image/name navigates to product detail page

### ProductFilters
Sidebar filter panel used in AllProductsPage and CategoryPage.
- Category radio buttons
- Max price range slider (₹0–₹5000)
- Sort dropdown
- In-stock checkbox
- Reset all button

### ProductSlider
Swiper-based carousel used on Homepage.
- Pulls featured products from `data/products.ts`
- Add to Cart → dispatches to Redux → navigates to product detail page

### AddressForm
react-hook-form based form in CheckoutPage.
- Full validation: name, phone (Indian mobile), email, address, state, pincode
- Indian states dropdown

---

## How to Run Locally

### Prerequisites
- Node.js 18+ installed
- npm 9+ installed

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/ajitsingh201/ecommerce-website-snackriti.git

# 2. Go into the project folder
cd ecommerce-website-snackriti

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

# 5. Open in browser
# http://localhost:5173
```

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## How to Deploy on Netlify

1. Push code to GitHub (already done)
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Select the repository `ecommerce-website-snackriti`
4. Build settings are auto-detected from `netlify.toml`:
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**

> ✅ `netlify.toml` already handles SPA routing (React Router) — no 404 on page refresh.

---

---

# 🇮🇳 HINGLISH DOCUMENTATION (हिंगलिश)

> *Ye section un logon ke liye hai jo Hindi mein samajhna chahte hain ki ye website kaise bani hai.*

---

## Project Kya Hai?

**Snackriti** ek Indian ecommerce website hai jisme aap Healthy Snacks, Dry Fruits, Beauty Products, Cosmetics, Fashion aur Beverages khareed sakte ho. Ye poora project sirf frontend technologies se bana hai — koi backend ya database nahi hai — isliye ye ek perfect portfolio project hai ya agar aap khud ka online store banana chahte ho toh ye ek achha starting point hai.

Is website mein woh sab kuch hai jo ek real ecommerce platform mein hona chahiye:
- Sundar homepage jisme animated sliders hain
- Fully kaam karne wala shopping cart (Redux ke saath)
- Multi-step checkout jisme UPI QR Code, Razorpay, aur Cash on Delivery ke options hain
- Login aur Signup pages
- Products ko filter, sort, aur search karne ki facility
- Sabhi legal/policy pages
- Mobile, tablet, aur desktop — sabhi pe responsive design

---

## Kaunsi Technologies Use Ki Gayi Hain?

| Technology | Kaam |
|---|---|
| **React** | Website ka UI (User Interface) banane ke liye |
| **TypeScript** | Code mein type safety ke liye (bugs kum hote hain) |
| **Vite** | Fast development server aur build tool |
| **Tailwind CSS** | Website ko style karne ke liye (CSS framework) |
| **Redux Toolkit** | Cart ka data manage karne ke liye |
| **React Router DOM** | Pages ke beech navigation ke liye |
| **React Hook Form** | Forms handle karne ke liye (validation ke saath) |
| **Swiper.js** | Slider/carousel banane ke liye |
| **React Icons** | Icons use karne ke liye |
| **Firebase** | Login ke liye structure ready hai (aage integrate hoga) |

---

## Folder Structure Kaise Hai?

```
snackriti/
│
├── public/images/        ← Website ki saari images yahan hain
│
├── src/
│   ├── components/       ← Reusable parts (Navbar, Footer, ProductCard, etc.)
│   ├── data/             ← Mock product data (24 products, 6 categories)
│   ├── hooks/            ← Custom hooks (jaise search debounce)
│   ├── pages/            ← Har page ka alag folder
│   ├── routes/           ← Saare routes ek jagah define hain
│   ├── store/            ← Redux cart state
│   └── types/            ← TypeScript interfaces
│
├── netlify.toml          ← Netlify ke liye build settings
└── package.json          ← Project dependencies
```

---

## Website Ki Features Detail Mein

### 🏠 Homepage (Ghar wala Page)

**Hero Slider:**
Jab aap website kholo, sabse pehle ek bada sliding banner dikhta hai. Ye Swiper.js se bana hai aur automatically slide hota rehta hai har 3.5 seconds mein.

**Category Section:**
5 main categories ke bade cards hain — Beauty Products, Dry Fruits, Healthy Snacks, Cosmetics, Fashion. Jab aap mouse card ke upar lete ho, image zoom hoti hai. Click karne pe us category ke products dikhte hain.

**Product Slider:**
Homepage pe featured products ek sliding carousel mein dikhte hain. Har product card pe:
- Discount badge (e.g. -33% OFF)
- Product ka naam aur category
- Price (regular aur discounted dono)
- "Add to Cart" button — click karo toh product cart mein add ho jaata hai aur aap product detail page pe chale jaate ho

**Why Snackriti Section:**
3 cards hain jo batate hain ki Snackriti kyun choose karein — Diverse Products, Quality Assured, Customer-First.

**Testimonials:**
Customers ki reviews ek slider mein dikhti hain. Star rating aur photo bhi hai.

---

### 🛍️ Shop Pages (Kharidaari wale Pages)

**All Products Page (`/products`):**
- Sabhi 24 products ek grid mein dikhte hain
- Left side mein ek filter panel hai:
  - Category choose kar sakte ho (radio buttons)
  - Maximum price set kar sakte ho (slider se — ₹0 se ₹5000 tak)
  - Sort kar sakte ho (A se Z, Z se A, price kam se zyada, price zyada se kam)
  - Sirf In-Stock products dekhne ka option
  - "Reset All" button se saare filters ek click mein hatao
- Upar ek search bar hai jisme type karo toh 300ms baad result automatically filter ho jaata hai (ye debounce hai)
- Mobile pe filter panel ek slide-out drawer mein khulta hai

**Category Page (`/category/:slug`):**
- Jab koi category click karo (jaise "Dry Fruits"), us category ka ek hero banner dikhta hai apni image ke saath
- Sirf us category ke products dikhte hain
- Wahi search aur filter options yahan bhi hain

**Product Detail Page (`/product/:slug`):**
- Product ki badi image dikhti hai (gallery view)
- Naam, category tag, star rating, price (regular + discounted dono)
- "You save ₹XXX!" message
- Packaging info
- In-stock / Out-of-stock status
- Quantity selector (+ aur - buttons se quantity badlo)
- **"Add to Cart"** button → cart mein add hoga, aap same page pe rahoge, button 1.8 second ke liye green ho jaata hai
- **"Buy Now"** button → cart mein add karke seedha cart page pe le jaata hai
- **Share** button → link copy ho jaata hai
- Product description
- Keywords/tags
- Neeche us category ke related products dikhte hain

---

### 🛒 Cart Page (`/cart`)

Cart page pe aap apna selection dekh sakte ho:
- Har product ki thumbnail, naam, category, packaging
- Quantity change karne ke liye + aur - buttons
- Delete button se product remove karo
- "Clear Cart" button se sabhi items hatao
- Right side mein Order Summary:
  - Subtotal
  - Shipping (₹499 se upar FREE, warna ₹49)
  - Total amount
  - "Proceed to Checkout" button
- Agar cart khaali hai toh ek sundar empty state screen dikhti hai "Start Shopping" button ke saath
- Navbar mein cart icon ke upar orange badge mein live count dikhta hai (Redux se connected)

---

### 💳 Checkout Page (`/checkout`)

Checkout 2 steps mein hota hai:

**Step 1 — Shipping Address:**
Form mein ye sab fill karo:
- Poora naam
- Mobile number (10 digit Indian number — validation hai)
- Email
- Address Line 1 & 2
- City, State (Indian states ki dropdown), Pincode (6 digit — validation hai)
- "Continue to Payment" button

**Step 2 — Payment:**

Teen payment options hain:

1. **UPI / QR Code (Default):**
   - Ek QR code automatically generate hota hai jo directly Snackriti ke UPI ID par payment karta hai
   - QR code mein amount pehle se fill hota hai
   - "Copy" button se UPI ID (`snackriti@paytm`) copy kar sako
   - Supported apps dikhte hain: GPay, PhonePe, Paytm, BHIM, Amazon Pay
   - Step-by-step instruction bhi dikhta hai

2. **Cards / Net Banking / Wallets (Razorpay):**
   - Razorpay ke through payment hoga
   - Visa, Mastercard, UPI, PhonePe, Google Pay, Paytm — sabhi logos dikhte hain

3. **Cash on Delivery:**
   - Delivery ke waqt cash mein payment
   - ₹25 COD handling charge lagta hai (order summary mein automatically add hota hai)

- Right side mein order summary hoti hai jisme saare items, qty, subtotal, shipping, aur total dikhta hai
- Order place hone ke baad ek success screen aata hai Order ID ke saath

---

### 🔐 Login & Signup Pages

**Login Page (`/login`):**
- "Continue with Google" button (placeholder — Firebase se connect hoga)
- Email + Password form
- "Forgot password?" link
- "Sign up free" link

**Signup Page (`/signup`):**
- Google signup option
- Full Name, Phone, Email, Password, Confirm Password
- Terms & Privacy Policy links
- Saari fields pe validation hai (react-hook-form se)

---

### 📄 Policy Pages

Chaar policy pages hain — sab ka design ek jaisa clean aur readable hai:
- **Privacy Policy** (`/privacy`) — Data privacy ke baare mein
- **Refund Policy** (`/refund`) — Return aur refund ke rules
- **Shipping Policy** (`/shipping`) — Delivery charges, timing, tracking
- **Terms & Conditions** (`/terms`) — Website use ke rules

---

### 🏢 Company Pages

**About Page (`/about`):**
- Company ka mission aur story
- Timeline (2021 se 2024 tak ka journey)
- Team members ke photos aur roles

**Why Us Page (`/why-us`):**
- Stats: 50,000+ customers, 1000+ products, 4.8★ rating
- 6 feature cards (Diverse Range, Quality, Delivery, Returns, Deals, Customer Support)
- Neeche ek CTA section hai

**Contact Page (`/contact`):**
- Contact information (email, phone, WhatsApp, address, hours)
- Contact form (naam, email, subject, message) — EmailJS se connect hoga

---

## Cart Ka Kaam Kaise Hota Hai? (Redux Explanation)

Cart ka state **Redux Toolkit** se manage hota hai. Matlab cart ka data poori website mein ek hi jagah store hota hai aur kahin se bhi access kiya ja sakta hai.

```
Jab "Add to Cart" click karo:
  → dispatch(addToCart({ product, quantity: 1 }))
  → Redux store mein product add ho jaata hai
  → Navbar mein badge count automatically update ho jaata hai

Jab quantity change karo:
  → dispatch(updateQuantity({ id, quantity }))

Jab item hatao:
  → dispatch(removeFromCart(id))

Jab order complete ho:
  → dispatch(clearCart())
  → Cart khaali ho jaata hai
```

---

## Locally Kaise Chalayein?

### Kya Chahiye?
- Node.js version 18 ya usse upar
- npm version 9 ya usse upar

### Steps:

```bash
# Step 1: GitHub se code download karo
git clone https://github.com/ajitsingh201/ecommerce-website-snackriti.git

# Step 2: Project folder mein jao
cd ecommerce-website-snackriti

# Step 3: Dependencies install karo
npm install

# Step 4: Development server start karo
npm run dev

# Step 5: Browser mein kholo
# http://localhost:5173
```

### Production Build Kaise Banayein?

```bash
npm run build
```

Ye `dist/` folder mein sab kuch compile karke rakh deta hai.

---

## Netlify Pe Deploy Kaise Kiya?

1. Code GitHub pe push kiya
2. [netlify.com](https://netlify.com) pe account banaya
3. "Add new site" → "Import from Git" select kiya
4. GitHub repository select ki
5. Build settings `netlify.toml` file se automatically detect ho gayi:
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `dist`
6. "Deploy site" click kiya

> **Note:** `netlify.toml` mein SPA routing bhi set hai — iska matlab hai ki agar koi directly `/products` ya `/cart` URL khole, toh 404 error nahi aayega. React Router sahi se kaam karega.

> **Ek important baat:** `package-lock.json` `.gitignore` mein add kiya hai kyunki Windows pe generate hone wala lock file Netlify ke Linux server pe rollup binary nahi paata tha. Ab Netlify khud fresh lock file banata hai.

---

## Aage Kya Add Kiya Ja Sakta Hai?

| Feature | Kya Chahiye |
|---|---|
| Real login/signup | Firebase Authentication |
| Products database | Firebase Firestore ya any REST API |
| Real payments | Razorpay SDK integration |
| Order history | Firebase Firestore |
| Admin panel | Separate React app ya Next.js |
| Email notifications | EmailJS ya NodeMailer |
| Wishlist | Redux slice add karo |
| Product reviews | Backend API |

---

## Project Banane Mein Kya Seekha?

Is project mein ye sab sikhne ko milta hai:
- React ke saath TypeScript kaise use karein
- Redux Toolkit se complex state kaise manage karein
- React Router DOM v7 se multi-page app kaise banayein
- react-hook-form se forms validate kaise karein
- Swiper.js se interactive sliders kaise banayein
- Tailwind CSS v4 se responsive design kaise karein
- Netlify pe React SPA kaise deploy karein
- Platform-specific npm dependency issues kaise fix karein

---

## Developer

**Ajit Singh**  
GitHub: [@ajitsingh201](https://github.com/ajitsingh201)

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

> *"Har ek great product ek great team ke peeche hoti hai — aur Snackriti bhi usi soch ke saath bana hai."*
