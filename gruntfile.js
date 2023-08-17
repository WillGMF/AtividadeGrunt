module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    
    grunt.registerTask('default', ['less:production','less:development', 'uglify']);
}

// grunt.loadNpmTasks('grunt-contrib-sass');
// grunt.loadNpmTasks('grunt-concurrent');
// grunt.registerTask('olaGrunt', function() {
//     const done = this.async();
//     setTimeout(function () {
//         console.log("aaaaaaaaa");
//         done()
//     }, 5000)
// })
// grunt.registerTask('tarefaDemorada', function() {
//     const done = this.async();
//     setTimeout(function () {
//         console.log("Olá Grunt");
//         done()
//     }, 3000)
// })