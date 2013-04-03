module.exports = function(grunt) {

    'use strict';

    var gruntConfig = {
        app: 'src',
        dist: 'dist'
    };

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-cdn');
    //grunt.loadNpmTasks('grunt-google-cdn');

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
                        'content/**/*',
                        'templates/**/*',
                        'lang/**/*',
                        'analytics.js',
                        'index.html'
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
            options: {
                dirs: ['<%= config.dist %>']
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    removeComments: true,
                    removeCommentsFromCDATA: false,
                    useShortDoctype: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.dist %>',
                    src: ['*.html', 'templates/*.html'],
                    dest: '<%= config.dist %>'
                }]
            }
        }

        /*ngmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.dist %>/js',
                    src: '*.js',
                    dest: '<%= config.dist %>/js'
                }]
            }
        }*/

        /*cdnify: {
            dist: {
                html: ['<%= config.dist %>*//*.html']
            }
        }*/

        /*cdn: {
            options: {
                cdn: '//ajax.googleapis.com/ajax/libs/angularjs/1.0.5/angular.min.js'
            },
            dist: {
                src: ['<%= config.dist %>/index.html'],
                dest: './dist/static/'
            }
        }*/

    });

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
        'useminPrepare',
        'concat',
        //'ngmin',
        'uglify',
        //'cdnify',
        'cssmin',
        'copy',
        'usemin',
        //'cdn',
        'htmlmin'
    ]);

    grunt.registerTask('default', ['build']);

};