const path = require("path");
const withPWA  = require("next-pwa");

module.exports = withPWA({
	extends: ["plugin:@next/next/recommended"],
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	reactStrictMode: true,
	pwa: {
		dest: "public",
		disable: process.env.NODE_ENV === 'development',
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
});
