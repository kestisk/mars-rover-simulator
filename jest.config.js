/** @type {import('jest').Config} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    moduleFileExtensions: ['ts', 'js', 'json'],
    testMatch: ['**/tests/**/*.test.ts'],
    roots: ['<rootDir>/src', '<rootDir>/tests'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    clearMocks: true,
};