module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
  jasmine_node: {
    coverage: {

    },
    options: {
      forceExit: true,
      match: '.',
      matchall: false,
      extensions: 'js',
      specNameMatcher: 'spec',
      captureExceptions: true,
      junitreport: {
        report: false,
        savePath : "./build/reports/jasmine/",
        useDotNotation: true,
        consolidate: true
      }
    }
  }
});

// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-jasmine-node-coverage');

// Default task(s).
grunt.registerTask('default', ['jasmine_node']);

};
