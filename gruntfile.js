module.exports = function(grunt) {
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/style.css' : 'sass/style.scss'
                }
            }
        },
        uncss: {
            dist: {
                files: {
                    'css/style.css': ['index.html']
                },
                options: {
                    compress: true
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'js/min/basket.min.js': ['js/basket.js'],
                    'js/min/scripts.min.js': ['js/jquery.js','/js/script.js']
                }
            }
        },
        imagemin: {
            dynamic: {
                options: {
                    progressive: false
                },
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/'
                }]
            }
        },
        watch: {
            scripts: {
                files: [
                    'sass/*.scss'
                ],
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'uncss', 'uglify', 'imagemin', 'watch']);
}