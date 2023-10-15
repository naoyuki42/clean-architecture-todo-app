import { Context, Hono } from "https://deno.land/x/hono@v3.7.2/mod.ts";

const app = new Hono();

app.get("/", (c: Context) => c.text("Hello Hono!"));

Deno.serve(app.fetch);
