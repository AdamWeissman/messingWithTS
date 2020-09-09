import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 8000 });

for await (const req of server) {
  req.respond({ body: "hello world\n" });
}

console.log("http://localhost:8000/");

// can use the deno run --allow-net in docker path ... can also use deno install --allow-net (check deno install help options for more)