gemini.suite('button', (suite) => {
    suite
        .setUrl('./button')

    gemini.suite('default button', (defaultButton) => {
        defaultButton
            .setCaptureElements('.button--default')
            .before((actions, find) => {
                this.button = find('.button--default');
            })
            .capture('plain')
            .capture('hovered', (actions) => {
                actions.mouseMove(this.button);
            })
            .capture('pressed', (actions) => {
                actions.mouseDown(this.button);
            })
            .capture('clicked', (actions) => {
                actions.mouseUp(this.button);
            });
    });

    gemini.suite('bright button', (brightButton) => {
        brightButton
            .setCaptureElements('.button--bright')
            .before((actions, find) => {
                this.button = find('.button--bright');
            })
            .capture('plain')
            .capture('hovered', (actions) => {
                actions.mouseMove(this.button);
            })
            .capture('pressed', (actions) => {
                actions.mouseDown(this.button);
            })
            .capture('clicked', (actions) => {
                actions.mouseUp(this.button);
            });
    });
});
