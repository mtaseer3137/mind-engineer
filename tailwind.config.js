/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Natural & Organic Primary Palette
        ivory: {
          DEFAULT: "#F5F3EA", // Warm Ivory - Main Background
          light: "#FAF9F5",
          dark: "#EDEAE0"
        },
        beige: {
          DEFAULT: "#E8E2D5", // Soft Beige - Alternate Sections
          light: "#F0ECE2",
          dark: "#DED6C7"
        },
        forest: {
          DEFAULT: "#354B3B", // Deep Forest Green - Primary Buttons, Headings
          dark: "#26362A",
          light: "#46624E",
          hover: "#2B3E31"
        },
        sage: {
          DEFAULT: "#879B83", // Sage Green - Secondary Accents, Tags
          light: "#A3B49F",
          dark: "#6D8169",
          muted: "rgba(135, 155, 131, 0.15)"
        },
        earth: {
          DEFAULT: "#A78B6A", // Earthy Brown - Decorative Elements, Badges
          light: "#BAA285",
          dark: "#8D7252"
        },
        charcoal: {
          DEFAULT: "#292D29", // Charcoal - Body Text
          muted: "#5A615A",
          light: "#7B837B"
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif']
      },
      boxShadow: {
        'organic': '0 4px 20px -2px rgba(41, 45, 41, 0.05)',
        'organic-lg': '0 10px 30px -4px rgba(41, 45, 41, 0.08)',
        'organic-card': '0 2px 12px 0 rgba(41, 45, 41, 0.04)',
        'organic-hover': '0 12px 32px -4px rgba(53, 75, 59, 0.12)'
      }
    },
  },
  plugins: [],
}
