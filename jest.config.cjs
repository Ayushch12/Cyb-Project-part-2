// jest.config.cjs
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
};
