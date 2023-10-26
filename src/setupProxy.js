const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', createProxyMiddleware({
    target: 'https://final-year-j646.onrender.com/', // Your API server
    changeOrigin: true,
  }));
};