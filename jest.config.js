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
    collectCoverage: false,
  };
  