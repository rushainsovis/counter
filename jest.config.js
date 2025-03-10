export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: ["<rootDir>/src/tests/**/*.test.{ts,tsx}"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json"
    }
  }
};
