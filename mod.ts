import { Application, send } from "https://deno.land/x/oak@v6.1.0/mod.ts"

const app = new Application();
const PORT = 8000;

app.use(async (ctx,next) => {

    await next();
    const demoString = ctx.response.headers.get("X-Response-Time");
    console.log(demoString);
    console.log(`${ctx.request.method}`)
})




app.use(async (ctx, next) => {
  await next();
  ctx.response.body="hello world"
})


app.use(async (ctx)=>{
  const filePath = ctx.request.url.pathname;

  await send(ctx, filePath, {
    root:`${Deno.cwd()}/public`
  })
})


app.listen({
  port:PORT
})