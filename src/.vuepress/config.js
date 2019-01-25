const tailwind = require("tailwindcss")("./tailwind.js");
const autoprefixer = require("autoprefixer");

module.exports = {
	dest: "docs",

	postcss: {
		plugins: [ tailwind, autoprefixer ]
	},

	title: "Dominic Serrano",

	themeConfig: {
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Projects", link: "/projects" },
		],

		search: false,

		sidebar: false, // [ 'auto' ]
	}
};