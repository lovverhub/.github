/** @type {import('prettier').Config} */
export default {
  $schema: 'https://json.schemastore.org/prettierrc',
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  printWidth: 100,
  proseWrap: 'never',
  quoteProps: 'consistent',
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  plugins: [
    import('prettier-plugin-sh'),
    import('prettier-plugin-organize-imports'),
    import('prettier-plugin-packagejson'),
    import('prettier-plugin-sort-json'),
    import('@trivago/prettier-plugin-sort-imports'),
  ],
};
