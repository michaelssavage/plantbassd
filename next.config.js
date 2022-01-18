const path = require("path");

module.exports = {
	extends: ["plugin:@next/next/recommended"],
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
};
