import React, { Component } from 'react';

import { ShowStat } from '../../blocks';

import './console.css';

class Console extends Component {
    constructor(props) {
        super(props);
        this.state = {
            command: '',
            availableCommands: ['showStat()'],
            showResult: null,
            strArgs: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showResult = this.showResult.bind(this);
    }

    handleChange(event) {
        this.setState({ command: event.target.value });
    }

    handleSubmit(event) {
        const command = this.state.command;
        let strArgs;
        let strCommand;
        if (command.indexOf('(') > -1 && command.indexOf(')') > -1) {
            strArgs = command.trim().substring(command.indexOf('(') + 1, command.indexOf(')'));
            strCommand = command.replace(strArgs, '');
        }
        if (typeof strCommand !== 'undefined' && this.state.availableCommands.includes(strCommand)) {
            this.setState({ showResult: strCommand, strArgs });
        } else {
            this.setState({ showResult: null });
            alert('Такой команды не существует! Попробуйте другую команду.');
        }
        event.preventDefault();
    }

    showResult() {
        switch (this.state.showResult) {
        case 'showStat()':
            return <ShowStat args={this.state.strArgs} />;
        default: return null;
        }
    }

    render() {
        return (
            <div className="console command-window__container">
                <div className="console-window">
                    {/*<div className="console-window__placeholder">*/}
                        {/*<h3>Для ввода доступны следующие команды:</h3>*/}
                        {/*<ul className="console-window__placeholder-list">*/}
                            {/*<li>selectTab(tabIndex) — выбор таба с индексом tabIndex</li>*/}
                            {/*<li>swapTabs(tabIndex1, tabIndex2) — поменять местами в DOM табы*/}
                                {/*tabIndex1 и tabIndex2</li>*/}
                            {/*<li>showStat() — показать статистику</li>*/}
                        {/*</ul>*/}
                    {/*</div>*/}
                    <div className="console-window__result">
                        { this.state.showResult !== null && this.showResult() }
                    </div>
                </div>
                <form className="console-form" onSubmit={this.handleSubmit}>
                    <input type="text" className="console-form__input" value={this.state.command} onChange={this.handleChange} />
                    <input type="submit" className="console-form__submit" value="Выполнить" />
                </form>
            </div>
        );
    }
}

export default Console;

