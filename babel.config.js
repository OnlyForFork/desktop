module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env", {
      "targets": {
        "electron": 8
      }
    }]
  ];

  const plugins = [
    "@babel/plugin-proposal-class-properties"
  ];

  const ignore = [
    "./app/extensions",
    "./app/vendor",
    "./app/compiled",
    "./app/assets",
    "./app/stylesheets",
    "./app/dist",
    "./app/node_modules",
    "./node_modules",
    './package.json',
    "./npm-debug.log"
  ]

  return {
    ignore,
    presets,
    plugins
  };
}
