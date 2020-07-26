const fs = require('fs');
const path = require('path');
const sh = require('shelljs');
const findUp = require('find-up');
const inquirer = require('inquirer');
const ejs = require('ejs');
const merge = require('deepmerge')
const root = require('./modules/root')

const configure = async (argv, modules) => {
  return modules.reduce(async (argv, m) => {
    if (m.questions) return {...argv, ...(await inquirer.prompt(m.questions(argv)))}
    return argv
  }, argv)
}
const installType = (modules, type, workspace) => {
  const dev = type === 'devDependencies'
  const packages = modules.reduce((packages, m) => {
    return m[type] ? packages.concat(m[type]()) : packages
  }, [])
  sh.exec(`pnpm add ${dev ? '-D' : ''} ${workspace ? '-W' : ''} ${packages.join(' ')}`, {silent: true})
}
const render = (src, dst, data) => {
  ejs.renderFile(src, data, {}, (err, str) => {
    if (err) throw err
    fs.writeFileSync(dst, str)
  })
}
exports.install = (modules, workspace=false) => installType(modules, 'dependencies', workspace)
exports.installDev = (modules, workspace=false) => installType(modules, 'devDependencies', workspace)
exports.installPeer = (modules, workspace=false) => installType(modules, 'peerDependencies', workspace)
exports.createDirs = (modules) => modules.forEach(m => m.dirs && m.dirs().forEach(d => sh.mkdir('-p', d)))
exports.renderTemplates = (modules, args) => {
  modules.forEach(m => {
    if (m.templates) {
      const templates = m.templates()
      for (const dst in templates) {
        const src = templates[dst]
        render(src, dst, args)
      }
    }
  })
}
exports.combinePackageJson = (modules) => {
  const packageJson = JSON.parse(fs.readFileSync('package.json'))
  return modules.reduce((packageJson, m) => {
    const updates = m.packageJson()
    return updates ? merge(packageJson, updates) : packageJson
  }, packageJson)
}
exports.configure = async (argv, origModules) => {
  const workspaceYaml = findUp.sync('pnpm-workspace.yaml')
  let rootDir = null
  let isRoot = true
  let scope = ''
  if (workspaceYaml) {
    rootDir = path.dirname(workspaceYaml)
    const rootPkgJson = JSON.parse(fs.readFileSync(`${rootDir}/package.json`, 'utf8'))
    scope = rootPkgJson.name
    isRoot = false
  }
  const modules = isRoot ? [root, ...origModules] : origModules

  const configuration = await configure({scope, rootDir, isRoot, modules, ...argv}, modules)
  return configuration
}
