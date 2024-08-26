/** @type {import("prettier").Config} */

// set vscode settings to use prettier for .astro files:
// "prettier.documentSelectors": ["**/*.astro"],
// "[astro]": {
//   "editor.defaultFormatter": "astro-build.astro-vscode"
// }

export default {
  jsxSingleQuote: false,
  singleQuote: true,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
