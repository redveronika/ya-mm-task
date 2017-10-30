gemini.suite('button', (suite) => {
    suite
        .setUrl('./button')
        .setCaptureElements('.button')
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
