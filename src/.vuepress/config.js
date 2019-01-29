const tailwind = require("tailwindcss")("./tailwind.js");
const autoprefixer = require("autoprefixer");

module.exports = {
	dest: "docs",

	postcss: {
		plugins: [ tailwind, autoprefixer ]
	},

	title: "Dominic Serrano",
};