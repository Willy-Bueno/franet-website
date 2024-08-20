// @ts-ignore
import tailwind from 'eslint-plugin-tailwindcss';
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      'quotes': ['error', 'single'],
      'indent': ['error', 2, { SwitchCase: 1 }],
      'vue/multi-word-component-names': 'off',
      'vue/html-indent': ['error', 2, {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }],
    }
  }
)
  .append(...tailwind.configs['flat/recommended'])
  .override('tailwindcss:rules', {
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    }
  })
