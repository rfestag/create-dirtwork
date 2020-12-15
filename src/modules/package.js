exports.dirs = () => [
  'src',
]
exports.packageJson = () => ({
  main: 'lib/index.js',
  scripts: {
    build: "babel --root-mode upward src -d lib --ignore **/*.stories.js,**/*.spec.js",
    dev: "babel -w --root-mode upward src -d lib --ignore **/*.stories.js,**/*.spec.js",
    lint: "eslint --fix",
    preinstall: "node -e \"!process.env.npm_config_user_agent.startsWith('pnpm/') && !console.log('Use \\`npx pnpm install\\` to install dependencies in this repository\\n') && process.exit(1)\"",
    prettier: "prettier --write src",
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
    "src/**/*.{md,mdx}": [
      "eslint --parser eslint-mdx --plugin mdx --fix",
      "prettier --parser mdx --write",
    ]
  }
})
