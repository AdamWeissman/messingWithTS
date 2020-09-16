import { Router } from "https://deno.land/x/oak@v6.1.0/mod.ts"

const router = new Router();

let students :Array<string>=["Sam", "Adam", "Ron"]


router.get("/", (ctx)=>{
  ctx.response.body="hello world"
});

router.get("/students", (ctx)=>{
  ctx.response.body=JSON.stringify(students);
})


export default router;

