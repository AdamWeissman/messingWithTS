import { Application } from "https://deno.land/x/oak@v6.1.0/mod.ts"

const app = new Application();
const PORT = 8000;

app.use((ctx) => {
  ctx.response.body="hello world"
})

app.listen({
  port:PORT
})