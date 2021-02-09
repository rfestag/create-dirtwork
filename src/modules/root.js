exports.templates = () => ({
  "babel.config.json": `${__dirname}/root/babel.config.json`,
  ".eslintrc.yaml": `${__dirname}/root/eslintrc.yaml`,
  ".gitignore": `${__dirname}/root/gitignore`,
  "pnpmfile.js": `${__dirname}/root/pnpmfile.js`,
})
exports.questions = ({name}) => [
  {
    name: "name",
    type: "input",
    message: "Project name:",
    default: name,
  }
]
exports.devDependencies = () => [
  "@babel/core",
  "@babel/eslint-parser@^7.12.13",
  "@babel/plugin-proposal-export-default-from",
  "@babel/plugin-syntax-dynamic-import",
  "@babel/plugin-transform-runtime",
  "@babel/preset-env",
  "@babel/preset-react",
  "@babel/runtime",
  "@changesets/cli",
  "@testing-library/jest-dom",
  "@testing-library/dom",
  "@testing-library/react",
  "babel-jest",
  "cross-env",
  "eslint",
  "eslint-config-prettier",
  "eslint-plugin-mdx",
  "husky",
  "jest",
  "lint-staged",
  "prettier",
  "react",
  "react-dom",
  //react-app ESLint dependencies
  "eslint-config-react-app",
  "@typescript-eslint/eslint-plugin@^4.0.0 ",
  "@typescript-eslint/parser@^4.0.0",
  "eslint@^7.5.0",
  "eslint-plugin-flowtype@^5.2.0",
  "eslint-plugin-import@^2.22.0",
  "eslint-plugin-jsx-a11y@^6.3.1",
  "eslint-plugin-react@^7.20.3",
  "eslint-plugin-react-hooks@^4.0.8",
  //Rollup build
  "rollup",
  "@rollup/plugin-babel",
  "@rollup/plugin-commonjs",
  "@rollup/plugin-node-resolve",
  "rollup-plugin-peer-deps-external",
]

exports.packageJson = () => ({
  scripts: {
    release: "echo Boom",
  },
  husky: {
    hooks: {
      "pre-commit": "pnpm recursive exec --filter ./packages --filter ./apps -- lint-staged"
    }
  }
})
