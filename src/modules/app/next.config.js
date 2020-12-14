const path = require("path");
const withCustomBabelConfigFile = require("next-plugin-custom-babel-config");
const withMDX = require('next-mdx-enhanced')({
  defaultLayout: true,
  layoutPath: 'src/layouts',
  fileExtensions: ['mdx', 'md'],
})


module.exports =
  withCustomBabelConfigFile(
    withMDX({
      babelConfigFile: path.resolve("../../babel.config.json"),
    })
  )
