exports.templates = () => ({
  'rollup.config.js': `${__dirname}/rollup/rollup.config.js`,
})
exports.devDependencies = () => [
  "@rollup/plugin-babel",
  "@rollup/plugin-commonjs",
  "@rollup/plugin-node-resolve",
  "rollup",
  "rollup-plugin-peer-deps-external",
]
