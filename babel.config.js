const plugins = [];

module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }], //allows react support, que "runtime" option imports the React libraries automatically so its no need to "Import React from "React"
  ],
  plugins: ["@babel/plugin-transform-runtime"],
};
