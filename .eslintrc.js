module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "amd": true,
	"node": true,
        "jest/globals": true,
    },
    "extends": [
	         "eslint:recommended", 
	         "plugin:jest/recommended"
               ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
	"allowImportExportEverywhere": false,
	"codeFrame": true,
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
	"jest"
    ],
    "rules": {
	    "strict": 0,
	    "no-console":0,
	    "semi": [1, 'never'],
	     "jest/no-disabled-tests": "warn",
	     "jest/no-focused-tests": "error",
	     "jest/no-identical-title": "error",
	     "jest/prefer-to-have-length": "warn",
	     "jest/valid-expect": "error"
    }
};
