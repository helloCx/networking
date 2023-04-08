/** @type {import('ts-jest').JestConfigWithTsJest} */
module.defaults = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
    }
};