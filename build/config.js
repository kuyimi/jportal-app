let path = require("path");
let fs = require("fs");
let nodeExternals = require("webpack-node-externals");
let Components = require("../components.json");
let utilsList = fs.readdirSync(path.resolve(__dirname, "../src/utils"));
let mixinsList = fs.readdirSync(path.resolve(__dirname, "../src/mixins"));
let transitionList = fs.readdirSync(path.resolve(__dirname, "../src/transitions"));
let externals = {};

Object.keys(Components).forEach(function (key) {
  externals[`jportal-app/packages/${key}`] = `jportal-app/lib/${key}`;
});

externals["jportal-app/src/locale"] = "jportal-app/lib/locale";
utilsList.forEach(function (file) {
  file = path.basename(file, ".js");
  externals[`jportal-app/src/utils/${file}`] = `jportal-app/lib/utils/${file}`;
});
mixinsList.forEach(function (file) {
  file = path.basename(file, ".js");
  externals[`jportal-app/src/mixins/${file}`] = `jportal-app/lib/mixins/${file}`;
});
transitionList.forEach(function (file) {
  file = path.basename(file, ".js");
  externals[`jportal-app/src/transitions/${file}`] = `jportal-app/lib/transitions/${file}`;
});

externals = [Object.assign({
  vue: "vue"
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  "@": path.resolve(__dirname, "../src"),
  main: path.resolve(__dirname, "../src"),
  packages: path.resolve(__dirname, "../packages"),
  examples: path.resolve(__dirname, "../examples"),
  "jportal-app": path.resolve(__dirname, "../")
};

exports.vue = {
  root: "Vue",
  commonjs: "vue",
  commonjs2: "vue",
  amd: "vue"
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;