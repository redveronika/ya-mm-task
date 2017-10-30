module.exports = {
    rootUrl: 'http://localhost:8080/main',
    calibrate: false,
    screenshotsDir: './app/tests/gemini/screens',

    browsers: {
        'chrome-latest': {
            desiredCapabilities: {
                version: '61.0',
                browserName: 'chrome',
                platform: 'MAC'
            }
        }
    },

    system: {
        projectRoot: '/Volumes/Files/Veronika/ya-mm-task',
        sourceRoot: '/Volumes/Files/Veronika/ya-mm-task/app',
        exclude: ['node_modules', 'webpack', 'app/assets', 'app/blocks', 'app/reducers', 'app/utils']
    },

    sets: {
        chrome: {
            files: './app/tests/gemini',
            browsers: ['chrome-latest']
        }
    }
};