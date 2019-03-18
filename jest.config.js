module.exports = {
    verbose: true,
    testURL: 'http://localhost/',
    "moduleFileExtensions": [
        "js",
        "json",
        // tell Jest to handle *.vue files
        "vue"
      ],
      "transform": {
        // process js with babel-jest
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
        // process *.vue files with vue-jest
        ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
      },
      // support the same @ -> src alias mapping in source code
      "moduleNameMapper": {
        "^@/(.*)$": "<rootDir>/src/$1"
      },
      // serializer for snapshots
      "snapshotSerializers": [
        "<rootDir>/node_modules/jest-serializer-vue"
      ]
};