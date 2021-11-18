const { POSTCSS_MODES } = require("@craco/craco");

module.exports = {
  style: {
    postcss: {
      mode: POSTCSS_MODES.file,
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "jsconfig",
        baseUrl: "./src",
      },
    },
  ],
};
