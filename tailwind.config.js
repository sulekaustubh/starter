/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: [
		"./App.{js,jsx,ts,tsx}",
		"./app/**/*.{js,jsx,ts,tsx}",
		"*.{jsx,tsx}",
		"./src/**/*.{js,jsx,ts,tsx}",
		"./src/Components/**/*.{js,jsx,ts,tsx}",
	],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				blue_button: "#205A99",
				blue_text: "#4D81E7",
				black_title: "#111827",
				black_text_matte: "#343434",
				gray_border: "#E8E8E8",
				gray_bg: "#EFEFEF",
				red_button: "#B3261E",
			},
			// fontFamily: {
			// 	gilroy: ["Gilroy-Regular"],
			// 	"gilroy-bold": ["Gilroy-Bold"],
			// 	"gilroy-heavy": ["Gilroy-Heavy"],
			// 	"gilroy-light": ["Gilroy-Light"],
			// 	"gilroy-medium": ["Gilroy-Medium"],
			// },
		},
	},
	plugins: [],
};
