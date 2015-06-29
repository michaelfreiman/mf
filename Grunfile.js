module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			compile: {
				options: {
					paths: ["styles"],
				},
				files: {
					"css/app.css" : "less/*.less",
				}
			}
		},
	  watch: {
	    less: {
	      files: ['styles/less/app.less'],
	      tasks: "less"
	    }
	  }
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['less', 'watch']);

};
