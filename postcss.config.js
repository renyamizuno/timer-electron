module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-apply'),
    require('postcss-nesting'),
    require('postcss-custom-properties'),
    require('postcss-color-function'),
    require('postcss-calc-function').default()
  ]
}
