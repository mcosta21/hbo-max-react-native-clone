module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './assets',
            components: './src/components',
            types: './src/types',
            styles: './src/styles',
            pages: './src/pages',
            hooks: './src/hooks',
            services: './src/services',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
