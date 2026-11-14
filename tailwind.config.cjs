/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		// Custom themes are objects; built-in themes are listed by name.
		// The active theme is set by data-theme on <html> in src/layouts/BaseLayout.astro.
		themes: [
			{
				ashley: {
					"color-scheme": "light",
					"base-100": "oklch(100% 0 0)",
					"base-200": "oklch(98% 0 0)",
					"base-300": "oklch(94% 0 0)",
					"base-content": "oklch(0% 0 0)",
					"primary": "#BCDEE1",
					"primary-content": "#110802",
					// "secondary": "oklch(34.465% 0.029 199.194)",
					// "secondary-content": "oklch(86.893% 0.005 199.194)",
					"accent": "#11576d",
					"accent-content": "#d0dbe0",
					"neutral": "#120c12",
					"neutral-content": "#c9c7c9",
					"info": "#BCDEE1",
					"info-content": "#070f0e",
					"success": "#C6DFC5",
					"success-content": "#090c07",
					"warning": "#F5E3A4",
					"warning-content": "#161003",
					"error": "#F2B6B5",
					"error-content": "#150806",
					// Shape (daisyUI 4 names; v5's --size-*, --depth, --noise have no v4 equivalent)
					"--rounded-box": "1rem",      // v5 --radius-box: cards, modals
					"--rounded-btn": "0.5rem",    // v5 --radius-field: buttons, inputs
					"--rounded-badge": "1rem",    // v5 --radius-selector: badges, toggles
					"--border-btn": "1px",        // v5 --border
					"--tab-border": "1px",
				},
			},
			"lofi", // previous Astrofy default, kept for easy switching back
			"dark",
		],
		darkTheme: "dark", // name of one of the included themes for dark mode
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	},
}
