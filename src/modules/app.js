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
    preinstall: "node -e \"!process.env.npm_config_user_agent.startsWith('pnpm/') && !console.log('Use \\`npx pnpm install\\` to install dependencies in this repository\\n') && process.exit(1)\"",
    prettier: "prettier --write src",
    start: "next start",
    dev: "next dev",
    test: "eslint && cross-env NODE_ENV=test jest"
  },
  publishConfig: {
    bin: '',
    main: 'lib/index.js',
  },
  'lint-staged': {
    "src/**/*.{js,jsx}": [
      "eslint --fix",
      "prettier --write",
      "cross-env NODE_ENV=test jest --bail --findRelatedTests"
    ],
    'src/**/*.{md,mdx}': [
      "eslint --plugin mdx --fix"
    ]
  }
})
