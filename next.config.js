// For SASS path
const path = require("path")

// For SEO content
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
})

const nextConfig = withPWA({
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
})

module.exports = nextConfig
