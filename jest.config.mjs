/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: "ts-jest",
  moduleFileExtensions: [
    "js",
    "ts"
  ],
  testEnvironment: "node",
  transform: {
    "^.+.(ts|tsx)$": ["ts-jest",{}],
  },
  testMatch: [
    '**/?(*.)+(spec|test).ts?(x)',
  ],
  testPathIgnorePatterns: [
    "dist"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.test.ts"
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ]
};