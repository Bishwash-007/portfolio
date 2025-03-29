const config = {
  plugins: ["@tailwindcss/postcss"],
  darkMode: "class",
    content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "*.{js,ts,jsx,tsx,mdx}",
    ],
    prefix: "",
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
          "fade-in": {
            from: { opacity: "0" },
            to: { opacity: "1" },
          },
          "fade-out": {
            from: { opacity: "1" },
            to: { opacity: "0" },
          },
          "slide-in-up": {
            from: { transform: "translateY(20px)", opacity: "0" },
            to: { transform: "translateY(0)", opacity: "1" },
          },
          "slide-in-down": {
            from: { transform: "translateY(-20px)", opacity: "0" },
            to: { transform: "translateY(0)", opacity: "1" },
          },
          "slide-in-left": {
            from: { transform: "translateX(-50px)", opacity: "0" },
            to: { transform: "translateX(0)", opacity: "1" },
          },
          "slide-in-right": {
            from: { transform: "translateX(50px)", opacity: "0" },
            to: { transform: "translateX(0)", opacity: "1" },
          },
          "scale-in": {
            from: { transform: "scale(0.8)", opacity: "0" },
            to: { transform: "scale(1)", opacity: "1" },
          },
          "scale-out": {
            from: { transform: "scale(1)", opacity: "1" },
            to: { transform: "scale(0.8)", opacity: "0" },
          },
          "bounce-vertical": {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(10px)" },
          },
          "width-expand": {
            from: { width: "0" },
            to: { width: "80px" },
          },
          "cursor-blink": {
            "0%, 100%": { opacity: "1" },
            "50%": { opacity: "0" },
          },
          "float-up": {
            "0%": { transform: "translateY(0)" },
            "100%": { transform: "translateY(-5px)" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          "fade-in": "fade-in 0.5s ease-out forwards",
          "fade-out": "fade-out 0.5s ease-out forwards",
          "slide-in-up": "slide-in-up 0.5s ease-out forwards",
          "slide-in-down": "slide-in-down 0.5s ease-out forwards",
          "slide-in-left": "slide-in-left 0.5s ease-out forwards",
          "slide-in-right": "slide-in-right 0.5s ease-out forwards",
          "scale-in": "scale-in 0.5s ease-out forwards",
          "scale-out": "scale-out 0.5s ease-out forwards",
          "bounce-vertical": "bounce-vertical 1.5s infinite ease-in-out",
          "width-expand": "width-expand 0.5s ease-out forwards",
          "cursor-blink": "cursor-blink 0.5s infinite",
          "float-up": "float-up 0.3s ease-out forwards",
        },
        transitionDelay: {
          "0": "0ms",
          "100": "100ms",
          "200": "200ms",
          "300": "300ms",
          "400": "400ms",
          "500": "500ms",
          "600": "600ms",
          "700": "700ms",
          "800": "800ms",
          "900": "900ms",
          "1000": "1000ms",
          "1500": "1500ms",
          "2000": "2000ms",
        },
      },
    },
};

export default config;
