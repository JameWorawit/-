import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import {URL, fileURLToPath} from 'url';


export default defineConfig({
  resolve:{
    alias: {
    '@' : fileURLToPath(new URL ('./src', import.meta.url))
  }
  },
  plugins: [tailwindcss(), vue()],
});
