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
  'src/index.test.js': `${__dirname}/component/index.test.js`,
  'rollup.config.js': `${__dirname}/component/rollup.config.js`,
  ".eslintrc.yaml": `${__dirname}/component/eslintrc.yaml`,
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
    test: "eslint && cross-env NODE_ENV=test jest --coverage"
  },
  publishConfig: {
    main: "./dist/index.js",
    module: "./dist/index.es.js",
    browser: "./dist/index.umd.js",
  },
  jest: {
    transform: {
      "\\.js?$": ["babel-jest", {rootMode: "upward"}]
    }
  },
  'lint-staged': {
    "src/**/*.{js,jsx}": [
      "eslint --fix",
      "prettier --write",
      "cross-env NODE_ENV=test jest --bail --findRelatedTests --coverage"
    ],
    "src/**/*.{md,mdx}": [
      "eslint --parser eslint-mdx --plugin mdx --fix",
      "prettier --parser mdx --write",
    ]
  }
})
