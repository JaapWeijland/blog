const path = require('path');
module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.css$/i,
      use: [{
        // loader: 'postcss-loader',
        // options: { implementation: require.resolve('postcss') },
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: () => [require('autoprefixer')()]
          }
        }
      }],
      include: path.resolve(__dirname, '../')
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      '@blog': path.resolve(__dirname, '../src/')
    };
    // Return the altered config
    return config;
  },
  docs: {
    autodocs: true
  }
};