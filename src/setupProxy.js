const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://127.0.0.1:5000', // Change to your Flask backend URL
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      }
    })
  );
};
