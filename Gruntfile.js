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
                        'content/photos.json',
                        'templates/**/*',
                        'lang/**/*',
                        'libs/foundation/js/vendor/custom.modernizr.js',
                        'libs/foundation/js/foundation.min.js',
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
        },

        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/content/imgs/lrg',
                    src: '{,}*.{png,jpg,jpeg}',
                    dest: '<%= config.dist %>/content/imgs/lrg'
                },
                {
                    expand: true,
                    cwd: '<%= config.app %>/content/imgs/thumb',
                    src: '{,}*.{png,jpg,jpeg}',
                    dest: '<%= config.dist %>/content/imgs/thumb'
                },
                {
                    expand: true,
                    cwd: '<%= config.app %>/content/imgs/winery',
                    src: '{,}*.{png,jpg,jpeg}',
                    dest: '<%= config.dist %>/content/imgs/winery'
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
                    from: '<script src="libs/jquery-1.9.1.js"></script>',
                    to: '<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>'
                },
                {
                    from: '<script src="libs/angular.js">',
                    to: '<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.0.5/angular.min.js">'
                },
                {
                    from: '<script src="libs/angular-resource.js"></script>',
                    to: '<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.0.5/angular-resource.min.js"></script>'
                },
                {
                    from: '<script src="libs/angular-sanitize.js"></script>',
                    to: '<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.0.5/angular-sanitize.min.js"></script>'
                }]
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
        'cssmin',
        'copy',
        'replace',
        'usemin',
        'htmlmin',
        'imagemin'
    ]);

    grunt.registerTask('default', ['build']);

};