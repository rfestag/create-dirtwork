exports.dirs = () => [
  'src/components',
  'src/layouts',
  'src/pages/api',
  'src/public',
]
exports.dependencies = () => [
  '@material-ui/core',
  '@material-ui/icons',
  '@material-ui/lab',
  'fontsource-roboto',
  'next',
  'next-mdx-enhanced',
  'next-plugin-custom-babel-config',
  'next-transpile-modules',
  'remark-frontmatter'
]
exports.templates = () => ({
  'src/pages/_document.js': `${__dirname}/app/_document.js`,
  'src/pages/_app.js': `${__dirname}/app/_app.js`,
  'src/pages/index.js': `${__dirname}/app/index.js`,
  'src/pages/test.mdx': `${__dirname}/app/test.mdx`,
  'src/components/components.js': `${__dirname}/app/components.js`,
  'src/components/Link.jsx': `${__dirname}/app/Link.jsx`,
  'src/theme.js': `${__dirname}/app/theme.js`,
  'src/layouts/index.js': `${__dirname}/app/layout.jsx`,
  'next.config.js': `${__dirname}/app/next.config.js`,
  ".eslintrc.yaml": `${__dirname}/app/eslintrc.yaml`,
})
exports.packageJson = () => ({
  private: true,
  scripts: {
    build: "next build",
    lint: "eslint --fix",
    preinstall: "npx only-allow pnpm",
    prettier: "prettier --write src",
    start: "next start",
    dev: "next dev",
    test: "eslint && cross-env NODE_ENV=test jest --passWithNoTests"
  },
  publishConfig: {
    bin: '',
    main: 'lib/index.js',
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
    "src/**/*.{js,jsx}": [
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
