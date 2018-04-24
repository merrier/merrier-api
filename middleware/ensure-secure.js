module.exports = function ensureSecure(ignoreHosts, ignoreRoutes) {
    if (!ignoreHosts) {
      ignoreHosts = [];
    }
  
    if (!ignoreRoutes) {
      ignoreRoutes = [];
    }
  
    return function(req, res, next) {
      var schema = '';
  
      if (
        (req.get('X-Forwarded-Protocol') || '').toLowerCase() === 'https' ||
        (req.get('X-Client-Scheme') || '').toLowerCase() === 'https'
      ) {
        schema = 'https';
      }
  
      next();
    };
  };
  