gemini.suite('tabs', (suite) => {
    suite.setUrl('./');

    gemini.suite('tabs', (suite) => {
        suite.setCaptureElements('.tabs')
            .capture('plain');
    });

    gemini.suite('tab__link', (suite) => {
        suite
            .setCaptureElements('.tab__link:not(.tab__link--active)')
            .capture('plain');
    });

    gemini.suite('tab__link--active', (suite) => {
        const selector = '.tab__link--active';
        suite
            .setCaptureElements(selector)
            .before((actions, find) => {
                this.tab = find(selector);
            })
            .capture('plain')
            .capture('pressed', (actions) => {
                actions.mouseDown(this.tab);
            });
    });
});
