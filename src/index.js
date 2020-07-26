#!/usr/bin/env node
const findUp = require('find-up')
const fs = require('fs')

const configPath = findUp.sync(['.dwrc','.dwrc.json'])
require('yargs')
  .strict()
  .commandDir('commands')
  .wrap(60)
  .help()
  .argv
