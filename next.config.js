// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass(
    {
        // basepath: '/eksk-next/',
        assetPrefix: "/eksk-landing/",
        // assetPrefix: "./",
        exportPathMap: function () {
          return {
            '/': { page: '/' }
          }
        }
      }
)
