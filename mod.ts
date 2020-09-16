import { Application, send } from "https://deno.land/x/oak@v6.1.0/mod.ts"

import api from "./api.ts"

const app = new Application();
const PORT = 8000;

app.use(async (ctx, next) => {

    await next();
    //const demoString = ctx.response.headers.get("X-Response-Time", "12ms");
    //console.log(demoString);
    //console.log(`${ctx.request.method}`)
})


app.use(api.routes())

app.use(async (ctx) => {
  const filePath = ctx.request.url.pathname;

  await send(ctx,filePath,{
    root: `${Deno.cwd()}/public`
  });
});





app.listen({
  port:PORT
})