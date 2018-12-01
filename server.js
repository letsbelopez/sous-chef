if (!process.browser)
  // polyfill
  global.fetch = require("isomorphic-unfetch");

const shopifyAuth = require("@shopify/koa-shopify-auth").default;
const verifyRequest = require("@shopify/koa-shopify-auth").verifyRequest;

const Koa = require("koa");
const next = require("next");
const Router = require("koa-router");
const session = require("koa-session");
const ApiProxy = require("./koa-shopify-api-proxy");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_KEY, SHOPIFY_SECRET } = process.env;

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  server.keys = [SHOPIFY_SECRET];

  server.use(session(server));

  server.use(
    shopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_SECRET,
      scopes: ["write_orders", "write_products"],
      accessMode: "offline",
      afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;
        console.log("We did it!", shop, accessToken);
        ctx.redirect("/");
      }
    })
  );

  // server.use(verifyRequest())

  router.get("/", async ctx => {
    await app.render(ctx.req, ctx.res, "/", ctx.query);
    ctx.respond = false;
  });

  router.get("*", async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(ApiProxy);

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(router.routes());

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
