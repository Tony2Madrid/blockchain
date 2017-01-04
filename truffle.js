module.exports = {
  build: {
    "index.html": "index2.html",
    "app.js": [
      "javascripts/app.js"

    ],
    "app.css": [
      "stylesheets/main.css"
    ],
    "images/": "images/"
  },
  rpc: {
    host: "localhost",
    port: 8545
  }
};
