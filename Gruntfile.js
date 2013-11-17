module.exports = function(grunt) {

    'use strict';

    var gruntConfig = {
        app: 'src',
        dist: 'dist',
        root: '.'
    };

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

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
                        'lang/**/*',
                        'fonts/**/*',
                        'libs/json3.min.js',
                        'libs/modernizr.custom.06915.js',
                        'index.html',
                        'favicon.ico',
                        'robots.txt'
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
                    src: ['*.html'],
                    dest: '<%= config.dist %>'
                }]
            }
        },

        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/img/carousel',
                    src: '{,}*.{png,jpg,jpeg}',
                    dest: '<%= config.dist %>/img/carousel'
                },
                {
                    expand: true,
                    cwd: '<%= config.app %>/img',
                    src: '{,}*.{png,jpg,jpeg}',
                    dest: '<%= config.dist %>/img'
                }]
            }
        },

        replace: {
            dist: {
                src: '<%= config.dist %>/index.html',
                dest: '<%= config.dist %>/index.html',
                replacements: [{
                    from: '<script src="libs/jquery/jquery.min.js"></script>',
                    to: '<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>'
                },
                {
                    from: '<script src="libs/angular.js">',
                    to: '<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js">'
                },
                {
                    from: '<script src="libs/angular-resource.js"></script>',
                    to: '<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular-resource.min.js"></script>'
                },
                {
                    from: '<script src="libs/angular-sanitize.js"></script>',
                    to: '<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular-sanitize.min.js"></script>'
                }]
            }
        },

        uncss: {
            dist: {
                files: {
                    'dist/css/styles.css': ['src/index.html']
                },
                options: {
                    compress:true
                }
            }
        }

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
        'uglify',
        'uncss',
        'copy',
        'replace',
        'usemin',
        'htmlmin',
        'imagemin'
    ]);

    grunt.registerTask('default', ['build']);

};