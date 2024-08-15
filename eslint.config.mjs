// @ts-ignore
import tailwind from "eslint-plugin-tailwindcss";
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
)
.append(...tailwind.configs["flat/recommended"])
