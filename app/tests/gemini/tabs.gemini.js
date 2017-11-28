gemini.suite('tabs', (suite) => {
    suite.setUrl('./');

    gemini.suite('tabs', (tabs) => {
        tabs.setCaptureElements('.tabs')
            .capture('plain');
    });

    gemini.suite('tab__link', (tab) => {
        tab
            .setCaptureElements('.tab__link:not(.tab__link--active)')
            .capture('plain');
    });

    gemini.suite('tab__link--active', (tab) => {
        const selector = '.tab__link--active';
        tab
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
