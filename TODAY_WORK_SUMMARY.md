# Mind Engineer — Daily Development Summary
**Date:** November 20, 2026  
**Project:** Mind Engineer (*"Unlock Your Mind. Transform Your Life."*)  
**Architecture:** Next.js 14 (App Router) + Tailwind CSS + Framer Motion + Neon PostgreSQL  

---

## 1. Migration to Next.js 14 (App Router)

### Objectives
- Transition the codebase from Vite + React to Next.js 14 App Router for production scalability, SSR capabilities, and unified serverless API routing.
- Preserve the complete **Natural & Organic** design system (Warm Ivory `#F5F3EA`, Deep Forest Green `#354B3B`, Sage Green `#879B83`, Soft Beige `#E8E2D5`).

### Implementation Details
- **Configuration (`next.config.mjs`)**: Configured React Strict Mode and unoptimized image settings.
- **Root Layout (`src/app/layout.jsx`)**:
  - Implemented zero-CLS font delivery using `next/font/google` for **Playfair Display** (headings) and **DM Sans** (body & buttons).
  - Configured global SEO metadata tailored to the university academic demonstration.
- **Root Page (`src/app/page.jsx`)**:
  - Implemented as a client-side entry point (`'use client';`) orchestrating all 11 homepage sections and interactive modals.
- **Component Directives**:
  - Verified and tagged all stateful and animated components with `'use client';` across `src/components/common/`, `src/components/home/`, and `src/components/sections/`.
- **Tailwind Configuration (`tailwind.config.js`)**:
  - Updated content detection paths to scan `./src/**/*.{js,ts,jsx,tsx,mdx}` and `./app/**/*.{js,ts,jsx,tsx,mdx}`.
  - Linked font families to CSS variables: `var(--font-playfair)` and `var(--font-dm-sans)`.

---

## 2. PostgreSQL (Neon Database) Setup & Optimization

### Database Configuration
- Configured connection strings in `.env` and `.env.local` pointing to the Neon serverless pooler:
  ```env
  DATABASE_URL="postgresql://neondb_owner:npg_dCjIuJRy29Yq@ep-proud-snow-bewsxmjd-pooler.c-9.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
  ```
- Created `.env.example` for version-controlled documentation.
- Updated `.gitignore` to prevent secret leakage (`.env`, `.env*.local`, `.next/`).

### Database Helper (`src/lib/db.js`)
- Installed `@neondatabase/serverless` for fast connection pooling over HTTP/WebSocket.
- Implemented connection caching (`cachedSql`) to avoid opening redundant connections on every request.
- Solved Node.js / Undici DNS latency on Windows by setting `dns.setDefaultResultOrder('ipv4first')` in `src/lib/db.js` and `run_npm.bat`, eliminating 60s IPv6 connect timeouts.
- Configured idempotent database schema initialization (`initDb()`).

---

## 3. Authentication System (Login & Sign Up)

### Database Schema
Created the `users` table in Neon PostgreSQL:
```sql
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role VARCHAR(50) DEFAULT 'student',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### Cryptographic Security Engine (`src/lib/auth.js`)
- **Password Hashing (`hashPassword`)**: Utilizes Node's native `crypto.scrypt` with a cryptographically random 16-byte salt (`salt:key`).
- **Timing-Safe Verification (`verifyPassword`)**: Prevents timing attacks using `crypto.timingSafeEqual`.
- **Session Tokens (`signToken`, `verifyToken`)**: Issues tamper-evident HMAC-SHA256 signed session tokens.

### Backend API Routes
1. **`POST /api/auth/signup`** (`src/app/api/auth/signup/route.js`):
   - Validates input format (name length, valid email, minimum 6-character password).
   - Checks for duplicate emails (`409 Conflict`).
   - Hashes passwords and records new users in PostgreSQL.
   - Sets a secure, HTTP-only cookie (`me_session`, 7-day expiration, `SameSite: Lax`).
2. **`POST /api/auth/login`** (`src/app/api/auth/login/route.js`):
   - Authenticates credentials against stored password hashes.
   - Issues session cookie and returns user profile.
3. **`GET /api/auth/me`** (`src/app/api/auth/me/route.js`):
   - Verifies session cookie and returns authenticated user data.
4. **`POST /api/auth/logout`** (`src/app/api/auth/logout/route.js`):
   - Clears session cookies for safe logout.

### Frontend Pages
1. **Login Page (`src/app/login/page.jsx`)**:
   - Styled with Warm Ivory backdrop, white organic card, and Deep Forest Green accents.
   - Features show/hide password toggle, input icons (`Mail`, `Lock`), and an **"Autofill Demo?"** quick-fill button for assignment reviewers.
   - Live form submission with error banners and loading spinner (`Loader2`).
2. **Sign Up Page (`src/app/signup/page.jsx`)**:
   - Form fields: Full Name, Email, Password, Confirm Password, and Academic Acknowledgment checkbox.
   - Client-side validation ensuring matching passwords and length requirements.
3. **Navbar Integration (`src/components/common/Navbar.jsx`)**:
   - Added **Sign In** action pill to the desktop navbar and mobile drawer menu.

---

## 4. Contact Form Backend & Live Database Storage

### Database Schema
Created the `contact_inquiries` table in Neon PostgreSQL:
```sql
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(100),
  interest VARCHAR(255),
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### API Implementation (`src/app/api/contact/route.js`)
- **`POST /api/contact`**:
  - Validates and sanitizes input fields (`name`, `email`, `phone`, `interest`, `message`).
  - Executes parameterized SQL inserts into `contact_inquiries`.
  - Returns `201 Created` with the inserted inquiry record.
- **`GET /api/contact`**:
  - Health check endpoint returning database connectivity status and total inquiry count.

### Frontend Integration (`src/components/sections/ContactSection.jsx`)
- Replaced mock state with asynchronous `fetch('/api/contact', { method: 'POST', ... })`.
- Added `isSubmitting` spinner state with disabled button styling to avoid accidental double submissions.
- Added error notification banner for submission failures.
- Updated success view confirming that the submission was recorded in PostgreSQL.

---

## 5. Verification & Live Testing Summary

| Test Case | Method | Expected Result | Actual Result | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Next.js Dev Server** | `npm run dev` | Port 3000 listening | Compiled in 9.3s | **PASSED** |
| **Homepage Route** | `GET /` | HTTP 200 | HTTP 200 OK | **PASSED** |
| **Login Route** | `GET /login` | HTTP 200 | HTTP 200 OK | **PASSED** |
| **Sign Up Route** | `GET /signup` | HTTP 200 | HTTP 200 OK | **PASSED** |
| **Database Connectivity** | `GET /api/contact` | Connected status | `{"status":"connected","inquiriesCount":1}` | **PASSED** |
| **Contact Submission** | `POST /api/contact` | HTTP 201 Created | Inquiry stored in PostgreSQL (`id: 1`, Ayesha Khan) | **PASSED** |
| **User Registration** | `POST /api/auth/signup` | HTTP 201 Created | User inserted with `scrypt` hash & session cookie set | **PASSED** |

---

## 6. Project File Directory Reference
```
d:\MINDSET website\
├── .env                              # Local PostgreSQL connection string (git-ignored)
├── .env.example                      # Sample configuration reference
├── .env.local                        # Next.js local environment overrides (git-ignored)
├── next.config.mjs                   # Next.js configuration
├── package.json                      # Next.js 14, Neon driver, Framer Motion
├── run_npm.bat                       # Node/npm script with IPv4 DNS optimization
├── tailwind.config.js                # Natural & Organic theme palette & font configs
└── src/
    ├── app/
    │   ├── layout.jsx                # Root layout with Google fonts (Playfair & DM Sans)
    │   ├── page.jsx                  # Main home page
    │   ├── login/
    │   │   └── page.jsx              # Organic Login page
    │   ├── signup/
    │   │   └── page.jsx              # Organic Sign Up page
    │   └── api/
    │       ├── auth/
    │       │   ├── signup/route.js   # User registration endpoint
    │       │   ├── login/route.js    # User authentication endpoint
    │       │   ├── me/route.js       # Session verification endpoint
    │       │   └── logout/route.js   # Session termination endpoint
    │       └── contact/
    │           └── route.js          # Contact inquiry insertion & count endpoint
    ├── components/
    │   ├── common/                   # Navbar, Footer, Logo, Button, Modals
    │   ├── home/                     # HeroSection, StatsBar, FeatureStrip
    │   └── sections/                 # ContactSection, CoursesSection, etc.
    └── lib/
        ├── auth.js                   # scrypt hashing & HMAC token signing
        └── db.js                     # Neon serverless client & table initialization
```
