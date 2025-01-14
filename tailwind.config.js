/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  colors: {
			  dark: {
				  950: "#09090b",
				  900: "#18181b",
				  800: "#1f2937",
				  700: "#374151",
				  600: "#475569",
				  500: ""
			  }
			//   lightMode: 
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
