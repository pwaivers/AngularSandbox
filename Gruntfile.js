'use strict';

module.exports = function(grunt) {

  // Load all the grunt tasks (use later)
  require('load-grunt-tasks')(grunt);

  // set variables
  var allSrc = ['app/**/*', '!app/lib/**/*'];

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: 3000,
          base: 'app'
        }
      }
    },

    watch: {
      files: allSrc,
      tasks: ['jshint'],
      options: {
          livereload: true
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'app/main.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'app/**/*.js', '!app/lib/**/*.js'],
      options: {
        jshintrc: '.jshintrc' // relative to Gruntfile
      }
    },

    wiredep: {
      task: {
        src: [
          'app/index.tpl.html'
        ]
      }
    },

    includeSource: {
      options: {
        basePath: 'app',
        baseUrl: '',
        ordering: 'top-down'
      },
      myTarget: {
        files: {
          'app/index.html': 'app/index.tpl.html'
        }
      }
    }
  });



  // Default task(s).
  grunt.registerTask('default', ['wiredep', 'includeSource', 'connect', 'watch']);

};
