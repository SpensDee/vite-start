import autoprefixer from "autoprefixer";
import combineSelectors from "postcss-combine-duplicated-selectors";
import combineMediaQueries from "postcss-combine-media-query";
import compress from "vite-plugin-compression";
import imageMin from "vite-plugin-imagemin";
import injectHTML from "vite-plugin-html-inject";
import purgecss from "@fullhuman/postcss-purgecss";

const isProd = process.env.NODE_ENV === "production";

export default {
  css: {
    postcss: {
      plugins: [
        combineMediaQueries(),
        combineSelectors({ removeDuplicatedValues: true }),
        autoprefixer(),
        purgecss({
          content: ["./dist/*.html"],
        }),
      ],
    },
  },
  build: {
    minify: isProd,
  },
  plugins: [
    injectHTML(),
    imageMin({
      svgo: {
        plugins: [
          { name: "RemoveTitle", active: false },
          { name: "RemoveDescription", active: false },
          { name: "RemoveViewBox", active: false },
          { name: "removeDimensions", active: true },
          { name: "removeScriptElement", active: true },
          { name: "removeStyleElement", active: true },
        ],
      },
    }),
    compress({
      algorithm: "brotliCompress",
    }),
  ],
};
