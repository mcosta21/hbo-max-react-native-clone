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
            routes: './src/routes',
          },
        },
      ],
      [
        'module:react-native-dotenv', 
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true
        }
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
