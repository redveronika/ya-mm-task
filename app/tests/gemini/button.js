gemini.suite('button', (suite) => {
    suite
        .setUrl('./button');

    const buttonsToTest = ['.button--default', '.button--light', '.button--bright'];

    buttonsToTest.forEach((button) => {
        gemini.suite(`${button} capturing`, (element) => {
            element
                .setCaptureElements(button)
                .before((actions, find) => {
                    this.button = find(button);
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
});
