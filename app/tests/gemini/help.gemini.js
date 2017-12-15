gemini.suite('help', (suite) => {
    suite.setUrl('./')
        .setCaptureElements('.help')
        .capture('plain');
});
