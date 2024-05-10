module.exports = function (api) {
  api.cache(true);

  //const presets = [ ... ];
  const plugins = ["react-native-reanimated/plugin"];

  return {
    presets,
    plugins,
  };
};
