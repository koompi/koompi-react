require("babel-register")

const router = require("/router").default
const Sitemap = require("./").default

new Sitemap(router).build("http://localhost:3000").save("/sitemap.xml")
