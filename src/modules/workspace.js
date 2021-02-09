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
    preinstall: "npx only-allow pnpm",
    prettier: "pnpm run --parallel --stream prettier",
    changeset: "pnpx changeset",
    version: "pnpx changeset version && pnpm install",
    publish: "pnpm publish -r",
    start: "pnpm run --parallel --stream start",
    test: "pnpm run --parallel --stream test"
  }
})
