module.exports = {
  preset: "react-native",
  roots: ['<rootDir>'],
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/lib/',
  ],
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
  },
  watchPathIgnorePatterns: ['__fixtures__\\/[^/]+\\/(output|error)\\.js'],
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!(jest-)?@react-native|react-native|react-native-smartlook-analytics)"
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: [
    "<rootDir>"
  ],
};