export default {
    moduleNameMapper: {
      '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
      '^@/(.*)$': '<rootDir>/src/$1',
    },
  };
  