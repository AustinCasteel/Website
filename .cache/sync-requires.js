const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\austi\\Documents\\GitHub\\Personal\\Website\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\austi\\Documents\\GitHub\\Personal\\Website\\src\\pages\\404.js"))),
  "component---src-templates-index-js": hot(preferDefault(require("C:\\Users\\austi\\Documents\\GitHub\\Personal\\Website\\src\\templates\\index.js")))
}

