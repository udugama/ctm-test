module.exports = {
    verbose: true,
    silent: false,
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    testMatch: ['**/?(*.)(test|spec).(ts|js)'],
    testPathIgnorePatterns: ['/build/'],
    preset: 'ts-jest',
    globals: {
      'ts-jest': {
        packageJson: 'package.json',
      },
    },
    // collectCoverage: false,
    collectCoverage: true,
    collectCoverageFrom: [
      '**/src/**/*.ts',
      '!**/typings.d.ts',
      '!**/src/__tests__/**',
    ],
    coverageThreshold: {
      global: {
        branches: 20,
        functions: 20,
        lines: 20,
        statements: 20,
      },
    },
    coverageReporters: ['text', 'lcov'],
  };
  