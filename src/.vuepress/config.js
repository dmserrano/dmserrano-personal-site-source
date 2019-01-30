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
        ]
    ],

	postcss: {
		plugins: [ tailwind, autoprefixer ]
	},

	title: "Dominic Serrano",
};