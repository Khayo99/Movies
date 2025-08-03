module.exports = (api) => {
  const isProduction = api.env === 'production';
  return {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
      'postcss-preset-env': {
        features: { 'nesting-rules': false },
        ...(isProduction ? { cssnano: {} } : {}),
      },
    },
  };
};
