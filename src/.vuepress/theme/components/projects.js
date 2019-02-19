import {
	EXPRESS,
	FIREBASE,
	JAVASCRIPT,
	NODEJS,
	PHASERIO,
	REACT,
	SOCKETIO,
	VUEJS
} from "./tags";

export default [
	{
		description: "Speech Synth is a simple GUI built around the Web Speech Synthesis API. With the Speech Synthesis API, text can be spoken in different voices, languages, pitch and more.",
		date: "Feb 17, 2019",
		image: "speech-synth.png",
		links: [
			{ link: "https://github.com/dmserrano/speech-synthesis-api", label: "Github" },
			{ link: "/speech-synthesis-api", label: "Project" },
		],
		tags: [
			JAVASCRIPT, VUEJS
		],
		title: "Speech Synth"
	},

	{
		description: "Free Books is a project that I built for my wife to help her track her annual expsenses. After not being able to find a free and simple solution, I decided to give it a try!",
		date: "Aug 30, 2018",
		image: "free-books.png",
		links: [
			{ link: "https://github.com/dmserrano/free-books", label: "Github" },
			{ link: "/free-books", label: "Project" },
		],
		tags: [
			JAVASCRIPT, VUEJS, FIREBASE
		],
		title: "Free Books"
	},

	{
		description: "Simple Chat is a real time, anonymous chat application built with React and Firebase. I also built a way to translate a message into another language to make communicating with someone in a foreign language easier. ¡Increíble!",
		date: "Jul 17, 2018",
		image: "simple-chat.png",
		links: [
			{ link: "https://github.com/dmserrano/simple-chat", label: "Github" },
			{ link: "/simple-chat", label: "Project" },
		],
		tags: [
			JAVASCRIPT, REACT, FIREBASE
		],
		title: "Simple Chat"
	},

	{
		description: "Twitter Stream uses the Twitter streaming API to filter custom tweets selected by a user. A user can filter tweets based on selected languages, certain words or phrases, hashtags, user accounts, locations and other options.",
		date: "Aug 31, 2017",
		image: "twitter-stream.png",
		links: [
			{ link: "https://github.com/dmserrano/twitter-stream-server", label: "Github (Server)" },
			{ link: "https://github.com/dmserrano/twitter-stream", label: "Github (Client)" },
			{ link: "/twitter-stream", label: "Project" },
		],
		tags: [
			EXPRESS, JAVASCRIPT, NODEJS, SOCKETIO, VUEJS
		],
		title: "Twitter Stream"
	},

	{
		description: "Inspired by Galaga and my favorite programming language, JS Space Adventure is a side scrolling browser game built with Phaser.io. Try and beat my high-score!",
		date: "Jan 4, 2017",
		image: "js-space-adventure.png",
		links: [
			{ link: "https://github.com/dmserrano/js-space-adventure", label: "Github" },
			{ link: "/js-space-adventure", label: "Project" },
		],
		tags: [
			FIREBASE, JAVASCRIPT, PHASERIO
		],
		title: "JS Space Adventure"
	},
];