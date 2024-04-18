import { defineConfig } from 'astro/config';
import db from "@astrojs/db";
import vercel from "@astrojs/vercel/serverless";
import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  integrations: [db(), auth()],
  output: "server",
  adapter: vercel()

});