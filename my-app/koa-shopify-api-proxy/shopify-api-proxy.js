const proxy = require('koa-better-http-proxy');

const PROXY_BASE_PATH = '/api';
const API_PATH = '/admin';

module.exports = async function shopifyAPIProxy(ctx, next) {
  const { session = {} } = ctx;
  const { accessToken, shop } = session;
  
  console.log("Context ---", ctx);
  console.log("Session ---", session);
  
  if (!ctx.path.startsWith(PROXY_BASE_PATH)) {
    await next();
    return;
  }

  if (accessToken == null || shop == null) {
    ctx.throw(403, 'Unauthorized');
    return;
  }

  await proxy(shop, {
    https: true,
    parseReqBody: false,
    // Setting request header here, not response. That's why we don't use ctx.set()
    // proxy middleware will grab this request header
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': accessToken,
    },
    proxyReqPathResolver() {
      const url = ctx.url.replace(/\/api/, '');
      return `https://${shop}${API_PATH}${url}`;
    },
  })(
    ctx,

    /*
      We want this middleware to terminate, not fall through to the next in the chain,
      but sadly it doesn't support not passing a `next` function. To get around this we
      just pass our own dummy `next` that resolves immediately.
    */
    noop,
  );
}

async function noop() {}
