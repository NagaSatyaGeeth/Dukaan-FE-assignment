/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter var", "sans-serif"],
			},
			fontSize: {
				"custom-small": ["12px", "16px"],
				"custom-base": ["14px", "20px"],
				"custom-regular": ["16px", "24px"],
				"custom-medium": ["15px", "22px"],
				"custom-large": ["20px", "28px"],
				"custom-xl": ["32px", "38px"],
			},
			fontWeight: {
				regular: 400,
				medium: 500,
			},
			colors: {
				black100: "#0061B0",
				secondaryNavbar: "#1E2640",
				navbarWhite: "#FFFFFF",
				navbarBlack: "#353C53",
				primaryBlue: "#146EB4",
				black12: "#1A181E",
				black30: "#4D4D4D",
				black50: "#808080",
				black60: "#999999",
				black85: "#D9D9D9",
				black90: "#E6E6E6",
				black95: "#F2F2F2",
				black98: "#FAFAFA",
				black100: "#FFFFFF",
				pagebgColor: "rgba(255, 255, 255, 0.1)",
			},
			boxShadow: {
				card: "0 2px 6px 0 rgba(26, 24, 30, 0.04)",
			},
			width: {
				card: "566px",
			},
		},
	},
	plugins: [],
};
