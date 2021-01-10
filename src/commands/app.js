const { combinePackageJson, configure, createDirs, install, renderTemplates } = require('../common')
const app = require('../modules/app')
const sh = require('shelljs');
const chalk = require('chalk');
const fs = require('fs');

exports.command = 'app [name]'
exports.desc = 'Create a new app'
exports.builder = {}
exports.handler = async function (argv) {
  const {name, scope, isRoot, rootDir, modules} = await configure(argv, [app])
  const path =  isRoot ? name : `${rootDir}/apps/${name}`
  console.log("Using", path)
  sh.mkdir('-p', path)
  sh.cd(path)
  console.log(chalk.green(`Preparing ${chalk.white('pnpm')}...`))
  sh.exec('npx pnpm add -g pnpm', {silent: true})
  console.log(chalk.green('Initializing...'))
  sh.exec(`pnpm init -y ${scope ? `--scope=${scope}` : ''}`, {silent: true})
  if (isRoot) sh.exec(`git init .`, {silent: true})
  createDirs(modules)
  renderTemplates(modules)
  console.log(chalk.green('Installing dependencies...'))
  install(modules)
  console.log(chalk.green('Finalizing configuration...'))
  const packageJson = combinePackageJson(modules)
  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, '  '))
  if (isRoot) sh.exec(`pnpx changeset init`)
  sh.exec('git add .', {silent: true})
  sh.exec(`git commit -am "Initial commit of app ${name}"`, {silent: true})
  console.log(chalk.green('Done'))
}
