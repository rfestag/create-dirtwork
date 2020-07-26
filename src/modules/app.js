exports.dirs = () => [
  'src/components',
  'src/pages/api',
  'src/public',
]
exports.dependencies = () => [
  'fontsource-roboto',
  '@material-ui/core',
  '@material-ui/icons',
  '@material-ui/lab',
  'next',
  'react',
  'react-dom'
]
exports.templates = () => ({
  'src/pages/_document.js': `${__dirname}/app/_document.js`,
  'src/pages/_app.js': `${__dirname}/app/_app.js`,
  'src/pages/index.js': `${__dirname}/app/index.js`,
  'src/theme.js': `${__dirname}/app/theme.js`,
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
      "eslint --plugin markdown --fix"
    ]
  }
})
