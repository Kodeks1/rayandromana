module.exports = function(grunt) {

    'use strict';

    // configurable paths
    var gruntConfig = {
        app: 'src',
        dist: 'dist'
    };

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: gruntConfig,

        clean: {
            dist: ['.tmp', 'dist/*'],
            server: '.tmp'
        },

        jshint: {
            options: {
                jshintrc: 'jshint.json'
            },
            all: [
                'Gruntfile.js',
                '<%= config.app %>/js/{,*/}*.js'
            ]
        },

        concat: {
            dist: {
                files: {
                    '<%= config.dist %>/js/raycashmore.min.js': ['<%= config.app %>/js/{,*/}*.js'],
                    '<%= config.dist %>/css/styles.css': ['<%= config.app %>/css/{,*/}*.css']
                }
            }
        },

        uglify: {
            dist: {
                files: {
                    '<%= config.dist %>/js/raycashmore.min.js': [
                        '<%= config.dist %>/js/raycashmore.min.js'
                    ]
                }
            }
        },

        cssmin: {
            dist: {
                files: {
                    '<%= config.dist %>/css/styles.css': ['<%= config.dist %>/css/styles.css']
                }
            }
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>',
                    dest: '<%= config.dist %>',
                    src: [
                        'img/**/*',
                        'libs/**/*',
                        'photos/**/*',
                        'templates/**/*'
                    ]
                }]
            }
        },

        useminPrepare: {
            html: '<%= config.app %>/index.html',
            options: {
                dest: '<%= config.dist %>'
            }
        },

        usemin: {
            html: ['<%= config.dist %>/index.html'],
            //css: ['<%= config.dist %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= config.dist %>']
            }
        }

    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-usemin');


    /*grunt.registerTask('test', [
        'clean:server',
        'coffee',
        'compass',
        'connect:test',
        'karma'
    ]);*/

    grunt.registerTask('build', [
        'clean:dist',
        //'jshint',
        //'test',
        'concat',
        'uglify',
        'cssmin',
        'copy'
        //'useminPrepare'
        //'usemin'
    ]);

    grunt.registerTask('default', ['build']);

};