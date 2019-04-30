const tailwind = require("tailwindcss")("./tailwind.js");
const autoprefixer = require("autoprefixer");

module.exports = {
	dest: "docs",

	plugins: [
		[
			"@vuepress/google-analytics",
			{
				"ga": "UA-133474168-1"
			}
		],
		[
			"seo"
		]
	],

	postcss: {
		plugins: [ tailwind, autoprefixer ]
	},

	themeConfig: {
		/**
		 * Author object is for SEO plugin
		*/
		author: {
			name: "Dominic Serrano",
			twitter: "dmsrojo"
		},

		lastUpdated: true
	},

	title: "Dominic Serrano",
};