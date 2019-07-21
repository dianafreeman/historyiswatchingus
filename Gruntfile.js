/* eslint-disable */
require('dotenv').config();
const sass = require('node-sass');

module.exports = function (grunt) {
    grunt.initConfig({
        eslint: {
            options: {
              configFile: './.eslintrc.json',
              fix: true
            },
            target: ['Gruntfile.js', '*.js', 'server/**/*.js', 'server/**/*.js', 'client/src/**/*.js'],
      },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'client/public/main.css': 'src/scss/main.scss' // 'destination': 'source'
                }
            }
        },
        postcss: {
            options: {
                map: {
                    inline: false, // save all sourcemaps as separate files...
                    annotation: 'client/public/maps/' // ...to the specified directory
                },
                processors: [
                    require('pixrem')(), // add fallbacks for rem units
                    require('autoprefixer'), // add vendor prefixes
                ]
            },
            dist: {
                src: 'client/public/main.css'
            }
        },
        browserify: {
            options: {
                browserifyOptions: {
                   debug: true
                },
                
             },
            dist: {
                files: {
                    'client/public/main.js': ['src/index.js'],
                },
                options: {
                    transform: [
                        ['babelify', {
                            presets: ["@babel/env", "@babel/react"]
                        }]
                    ],
                }
            }
        },
        watch: {
            scss: {
                files: ['src/scss/*.scss'],
                tasks: ['sass'],
                options: {
                    reload: true
                }
            },
            scripts: {
                files: ['<%= eslint.target %>'],
                tasks: ['eslint', 'browserify'],
                options: {
                    reload: true
                }
            }
        },
});

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('build', ['eslint', 'browserify', 'sass', 'postcss']);
    grunt.registerTask('default', ['watch']);
};
