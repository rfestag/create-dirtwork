exports.dirs = () => [
  'src',
]
exports.templates = () => ({
  'src/index.js': `${__dirname}/package/index.js`,
  'src/index.test.js': `${__dirname}/package/index.test.js`,
  'rollup.config.js': `${__dirname}/package/rollup.config.js`,
  ".eslintrc.yaml": `${__dirname}/package/eslintrc.yaml`,
})
exports.packageJson = () => ({
  main: "./dist/index.js",
  module: "./dist/index.es.js",
  browser: "./dist/index.umd.js",
  scripts: {
    build: "rollup -c",
    dev: "rollup -w -c",
    lint: "eslint --fix",
    preinstall: "npx only-allow pnpm",
    prettier: "prettier --write src",
    test: "eslint && cross-env NODE_ENV=test jest --passWithNoTests"
  },
  publishConfig: {
    bin: '',
    main: "./dist/index.js",
    module: "./dist/index.es.js",
    browser: "./dist/index.umd.js",
  },
  jest: {
    bail: true,
    collectCoverage: true,
    coverageReporters: ["json", "lcov", "text", "clover"],
    transform: {
      "\\.js?$": [
        "babel-jest",
        {
          "rootMode": "upward"
        }
      ]
    }
  },
  'lint-staged': {
    "src/**/*.js": [
      "eslint --fix",
      "prettier --write",
      "cross-env NODE_ENV=test jest --bail --findRelatedTests --passWithNoTests"
    ],
    "src/**/*.{md,mdx}": [
      "eslint --parser eslint-mdx --plugin mdx --fix",
      "prettier --parser mdx --write",
    ]
  }
})
