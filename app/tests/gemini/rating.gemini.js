gemini.suite('rating', (suite) => {
    suite.setUrl('./rating')
        .setCaptureElements('.rating')
        .capture('plain');
});
