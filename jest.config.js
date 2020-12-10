// eslint-disable-next-line no-undef
module.exports = {
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
  },
  coverageDirectory: "./coverage",
  "collectCoverageFrom": [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  coveragePathIgnorePatterns : ["<rootDir>/build/", "<rootDir>/node_modules/", "<rootDir>/config/", "<rootDir>/jest.config.js", "<rootDir>/coverage/", "<rootDir>/.eslintrc.js", "store.js", "index.js", "server-dev.js"]
};
