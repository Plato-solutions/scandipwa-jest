module.exports = {
    verbose: true,
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest'
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
    moduleDirectories: ['node_modules', 'src'],
    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: false,
    // The directory where Jest should output its coverage files
    coverageDirectory: 'jest-coverage',
    moduleNameMapper: {
        '\\.(css|less|scss|style)$': '<rootDir>/tests/__mocks__/styleMock.js',
        '^Component/(.*)$': [
            '<rootDir>/src/component/$1',
            '<rootDir>/node_modules/@scandipwa/scandipwa/src/component/$1'
        ],
        '^Route/(.*)$': [
            '<rootDir>/src/route/$1',
            '<rootDir>/node_modules/@scandipwa/scandipwa/src/route/$1'
        ],
        '^Type/(.*)$': [
            '<rootDir>/src/type/$1',
            '<rootDir>/node_modules/@scandipwa/scandipwa/src/type/$1'
        ],
        '^Style/(.*)$': [
            '<rootDir>/src/style/$1',
            '<rootDir>/node_modules/@scandipwa/scandipwa/src/style/$1'
        ],
        '^Util/(.*)$': [
            '<rootDir>/src/util/$1',
            '<rootDir>/node_modules/@scandipwa/scandipwa/src/util/$1'
        ],
        '^Query/(.*)$': [
            '<rootDir>/src/query/$1',
            '<rootDir>/node_modules/@scandipwa/scandipwa/src/query/$1'
        ],
        '^Store/(.*)$': [
            '<rootDir>/src/store/$1',
            '<rootDir>/node_modules/@scandipwa/scandipwa/src/store/$1'
        ],
        '^Store$': [
            '<rootDir>/src/store',
            '<rootDir>/node_modules/@scandipwa/scandipwa/src/store'
        ],
        '^SourceComponent(.*)$': '<rootDir>/node_modules/@scandipwa/scandipwa/src/component$1',
        '^SourceRoute(.*)$': '<rootDir>/node_modules/@scandipwa/scandipwa/src/route$1',
        '^SourceType(.*)$': '<rootDir>/node_modules/@scandipwa/scandipwa/src/type$1',
        '^SourceSource(.*)$': '<rootDir>/node_modules/@scandipwa/scandipwa/src$1',
        '^SourceStyle(.*)$': '<rootDir>/node_modules/@scandipwa/scandipwa/src/style$1',
        '^SourceUtil(.*)$': '<rootDir>/node_modules/@scandipwa/scandipwa/src/util$1',
        '^SourceQuery(.*)$': '<rootDir>/node_modules/@scandipwa/scandipwa/src/query$1',
        '^SourceStore(.*)$': '<rootDir>/node_modules/@scandipwa/scandipwa/src/store$1',
        '^Source/(.*)$': '<rootDir>/node_modules/@scandipwa/scandipwa/src$1'
    },
    setupFilesAfterEnv: ['<rootDir>/tests/__mocks__/globalMock.js'],
    transformIgnorePatterns: ['node_modules/(?!(@storybook|@scandipwa/scandipwa))'],
    testURL: 'http://localhost:3000/'
};
