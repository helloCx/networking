/** @types {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
  transformIgnorePatterns: [
    "node_modules"
  ],
};