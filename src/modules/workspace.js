exports.templates = () => {
  return {
    'pnpm-workspace.yaml': `${__dirname}/workspace/pnpm-workspace.yaml`,
    '.npmrc': `${__dirname}/workspace/npmrc`,
    'README.md': `${__dirname}/workspace/README.md`,
    '.syncpack.json': `${__dirname}/workspace/syncpack.json`,
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
    changeset: "pnpx changeset",
    dev: "pnpm run --parallel --stream dev",
    lint: "pnpm run --parallel --stream lint",
    preinstall: "npx only-allow pnpm",
    prettier: "pnpm run --parallel --stream prettier",
    publish: "pnpm publish -r",
    start: "pnpm run --parallel --stream start",
    sync: "pnpx syncpack fix-mismatches",
    test: "pnpm run --parallel --stream test",
    version: "pnpx changeset version && pnpm install",
  }
})
