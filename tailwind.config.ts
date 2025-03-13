/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,ts,jsx,tsx}",  // This ensures Tailwind scans all relevant files
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		fontFamily: {
			sans: ["Lato", "sans-serif"], // Set Lato as default
		},
  		colors: {
			primary: "#2A2A2A", // Custom blue color
			secondary: "#E11D48", // Custom red color
			background: "#1E1E1E", // Light gray background
			foreground: "#111827", 
			accent: "#BB002D"
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
