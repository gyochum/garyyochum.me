'use strict';
var GulpConfig = (function () {
    function gulpConfig() {       
		//default base folders
        this.source = './src/';
        this.sourceApp = this.source + 'app/';

		/*typescript************************/
        this.tsOutputPath = this.source + 'assets/js';
        this.allJavaScript = [this.source + 'assets/js/**/*.js'];
        this.allTypeScript = this.sourceApp + '**/*.ts';

        this.typings = './src/definitions/';
        this.libraryTypeScriptDefinitions = './src/definitions/**/*.ts';
		/*typescript************************/
		
		/*scss************************/
		
		/*scss************************/
    }
    return gulpConfig;
})();
module.exports = GulpConfig;