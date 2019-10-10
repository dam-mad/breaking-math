module.exports = {
  transform: {
    "^.+\\.jsx?$": `<rootDir>/testing/config/jest-preprocess.js`,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/testing/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  collectCoverage: false,
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
    },
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/testing/config/loadershim.js`],
}
