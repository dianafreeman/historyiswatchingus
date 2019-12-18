const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  config.module.rules.push({
      test: /\.css$/,
      loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]',
      include: path.join(__dirname, 'app')
  });
  
  config.module.rules.push({
      test: /\.css$/,
      loader: 'style!css',
      include: path.join(__dirname, 'node_modules')
  })
  
  // Return the altered config
  return {
    node: {
      fs: 'empty',
    },
    ...config,
  };
};
