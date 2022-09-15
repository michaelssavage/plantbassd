const path = require("path");
const withPWA  = require("next-pwa");

module.exports = withPWA({
	extends: ["plugin:@next/next/recommended"],
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},
	pwa: {
    dest: "public",
		disable: process.env.NODE_ENV === 'development',
	},
  reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
});
