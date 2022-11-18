import preprocess from "svelte-preprocess";
//import adapter from "@sveltejs/adapter-auto";
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    prerender: {
      // This can be false if you're using a fallback (i.e. SPA mode)
      default: true
    }
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;