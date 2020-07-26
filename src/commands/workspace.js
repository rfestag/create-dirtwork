const { combinePackageJson, configure, createDirs, install, renderTemplates } = require('../common')
const workspace = require('../modules/workspace')
const sh = require('shelljs');
const chalk = require('chalk');
const yargs = require('yargs');
const fs = require('fs');

exports.command = 'workspace [name]'
exports.desc = 'Create a new workspace'
exports.builder = {}
exports.handler = async function (argv) {
  const {name, modules} = await configure(argv, [workspace])
  sh.mkdir('-p', name)
  sh.cd(name)
  console.log(chalk.green(`Preparing ${chalk.white('pnpm')}...`))
  sh.exec('npx pnpm add -g pnpm', {silent: true})
  console.log(chalk.green('Initializing...'))
  sh.exec(`pnpm init -y`, {silent: true})
  sh.exec(`git init .`, {silent: true})
  createDirs(modules)
  renderTemplates(modules)
  console.log(chalk.green('Installing dependencies...'))
  install(modules, true)
  console.log(chalk.green('Finalizing configuration...'))
  const packageJson = combinePackageJson(modules)
  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, '  '))
  console.log(chalk.green('Done'))
}
