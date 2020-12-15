exports.dirs = () => [
  'src',
]
exports.dependencies = () => [
  'prop-types@^15.7.2',
]
exports.peerDependencies = () => [
  'react',
  'react-dom',
  'prop-types',
]
exports.devDependencies = () => [
  'react',
  'react-dom',
]
exports.templates = () => ({
  'src/index.js': `${__dirname}/component/index.js`,
  'rollup.config.js': `${__dirname}/component/rollup.config.js`,
  ".eslintrc.yaml": `${__dirname}/app/eslintrc.yaml`,
})
exports.packageJson = () => ({
  main: "./dist/index.js",
  module: "./dist/index.es.js",
  browser: "./dist/index.umd.js",
  scripts: {
    build: "rollup -c",
    dev: "rollup -w -c",
    lint: "eslint --fix",
    preinstall: "node -e \"!process.env.npm_config_user_agent.startsWith('pnpm/') && !console.log('Use \\`npx pnpm install\\` to install dependencies in this repository\\n') && process.exit(1)\"",
    prettier: "prettier --write src",
    test: "eslint && cross-env NODE_ENV=test jest"
  },
  publishConfig: {
    main: "./dist/index.js",
    module: "./dist/index.es.js",
    browser: "./dist/index.umd.js",
  },
  'lint-staged': {
    "src/**/*.{js,jsx}": [
      "eslint --fix",
      "prettier --write",
      "cross-env NODE_ENV=test jest --bail --findRelatedTests"
    ],
    'src/**/*.{md,mdx}': [
      "eslint --plugin markdown --fix"
    ]
  }
})
