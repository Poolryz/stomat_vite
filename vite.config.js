import {resolve} from 'path';
import handlebars from 'vite-plugin-handlebars';
const pages = {
  index: resolve (__dirname, 'index.html'),
  about: resolve (__dirname, 'about.html'),
  services: resolve (__dirname, 'services.html'),
  news: resolve (__dirname, 'news.html'),
  new: resolve (__dirname, 'new.html'),
  contacts: resolve (__dirname, 'contacts.html'),
};

export default {
  server: {
    watch: {
      usePolling: true,
    },
  },
  build: {
    outDir: './dist',
    rollupOptions: {
      input: {
        ...pages,
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
    minify: false,
    terserOptions: {
      compress: false,
      mangle: false,
    },
  },
  plugins: [
    handlebars ({
      partialDirectory: resolve (__dirname, 'partials'),
      reloadOnPartialChange: true,
    }),
  ],
};
