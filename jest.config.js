const nextJest = require("next/jest");

/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});
const config = {
  collectCoverage: true,

  coverageDirectory: "coverage",

  coverageProvider: "v8",

  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};

module.exports = createJestConfig(config);
