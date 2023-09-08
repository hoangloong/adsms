module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: "less-loader",
        options: {
          lessOptions: {
            modifyVars: {
              // modify theme variable
              "primary-color": "#1DA57A",
              "link-color": "#1DA57A",
              "border-radius-base": "6px",
            },
            javascriptEnabled: true,
          },
        },
      },
    ],
  },
};
