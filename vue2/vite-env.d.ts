/// <reference types="vite/client" />

declare module "vite-plugin-vue2" {
  import { Plugin } from "vite";
  const plugin: () => Plugin;
  export default plugin;
}
