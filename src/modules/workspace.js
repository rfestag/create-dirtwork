exports.templates = () => {
  return {
    'pnpm-workspace.yaml': `${__dirname}/workspace/pnpm-workspace.yaml`,
    '.npmrc': `${__dirname}/workspace/npmrc`,
    'README.md': `${__dirname}/workspace/README.md` 
  }
}
exports.dirs = () => [
  'apps',
  'packages'
]
exports.packageJson = () => ({
  private: true,
  scripts: {
    bootstrap: "pnpm recursive install",
    build: "pnpm run --parallel --stream build",
    dev: "pnpm run --parallel --stream dev",
    lint: "pnpm run --parallel --stream lint",
    preinstall: "node -e \"!process.env.npm_config_user_agent.startsWith('pnpm/') && !console.log('Use \\`npx pnpm install\\` to install dependencies in this repository\\n') && process.exit(1)\"",
    prettier: "pnpm run --parallel --stream prettier",
    publish: "pnpm publish",
    start: "pnpm run --parallel --stream start",
    test: "pnpm run --parallel --stream test"
  }
})
