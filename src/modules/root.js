exports.templates = () => ({
  "babel.config.json": `${__dirname}/root/babel.config.json`,
  ".eslintrc.yaml": `${__dirname}/root/eslintrc.yaml`,
  ".gitignore": `${__dirname}/root/gitignore`,
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
  "@babel/plugin-proposal-export-default-from",
  "@babel/plugin-syntax-dynamic-import",
  "@babel/plugin-transform-runtime",
  "@babel/preset-env",
  "@babel/preset-react",
  "@babel/runtime",
  "@testing-library/jest-dom",
  "@testing-library/react",
  "babel-jest",
  "cross-env",
  "eslint",
  "eslint-config-prettier",
  "eslint-plugin-markdown",
  "husky",
  "jest",
  "lint-staged",
  "prettier",
  //react-app ESLint dependencies
  "eslint-config-react-app",
  "@typescript-eslint/eslint-plugin@2.x",
  "@typescript-eslint/parser@2.x",
  "babel-eslint@10.x",
  "eslint@6.x",
  "eslint-plugin-flowtype@4.x",
  "eslint-plugin-import@2.x",
  "eslint-plugin-jsx-a11y@6.x",
  "eslint-plugin-react@7.x",
  "eslint-plugin-react-hooks@2.x",
  //Rollup build
  "rollup",
  "@rollup/plugin-babel",
  "@rollup/plugin-commonjs",
  "@rollup/plugin-node-resolve",
  "rollup-plugin-peer-deps-external",
]

exports.packageJson = () => ({
  husky: {
    hooks: {
      "pre-commit": "pnpm recursive exec --filter ./packages --filter ./apps -- lint-staged"
    }
  }
})
