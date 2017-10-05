import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addCommand } from '../../reducers/console.reducer';
import { SelectTab, ShowStat, SwapTabs } from '../../blocks';

import './console.css';

const SELECT_TAB = 'selectTab()';
const SHOW_STAT = 'showStat()';
const SWAP_TABS = 'swapTabs()';

class Console extends Component {
    constructor(props) {
        super(props);
        this.state = {
            command: '',
            availableCommands: [SELECT_TAB, SHOW_STAT, SWAP_TABS],
            showResult: null,
            strArgs: '',
            message: '',
            commandHistId: null,
            time: null,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showResult = this.showResult.bind(this);
        this.commandHistory = this.commandHistory.bind(this);
        this.showPrevCommand = this.showPrevCommand.bind(this);
        this.showNextCommand = this.showNextCommand.bind(this);
    }

    handleChange(event) {
        this.setState({ command: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const command = this.state.command;
        let strArgs;
        let strCommand;
        if (command.indexOf('(') > -1 && command.indexOf(')') > -1) {
            strArgs = command.trim().substring(command.indexOf('(') + 1, command.indexOf(')'));
            strCommand = command.replace(strArgs, '');
        }
        if (typeof strCommand !== 'undefined' && this.state.availableCommands.includes(strCommand)) {
            this.setState({ showResult: strCommand, strArgs, time: new Date().valueOf() });
        } else {
            this.setState({ showResult: null });
            this.setState({ message: 'Такой команды не существует! Попробуйте другую команду.' });
        }
        this.props.addCommand(command);
    }

    showResult() {
        console.log('showResult')
        switch (this.state.showResult) {
        case SHOW_STAT:
            return <ShowStat time={this.state.time} />;
        case SELECT_TAB:
            return <SelectTab selectedTabId={this.state.strArgs} />;
        case SWAP_TABS:
            return <SwapTabs time={this.state.time} args={this.state.strArgs} />;
        default: return null;
        }
    }

    showPrevCommand() {
        const prevCommandId = this.state.commandHistId !== null ?
            this.state.commandHistId - 1 :
            this.props.commandsHist.length - 2;
        if (prevCommandId >= 0) {
            this.setState({
                commandHistId: prevCommandId,
                command: this.props.commandsHist[prevCommandId],
            });
        }
    }

    showNextCommand() {
        const nextCommandId = this.state.commandHistId !== null ?
            this.state.commandHistId + 1 :
            this.props.commandsHist.length - 1;
        if (nextCommandId <= this.props.commandsHist.length - 1) {
            this.setState({
                commandHistId: nextCommandId,
                command: this.props.commandsHist[nextCommandId],
            });
        }
    }

    commandHistory(event) {
        if (event.key === 'ArrowUp') {
            this.showPrevCommand();
        } else if (event.key === 'ArrowDown') {
            this.showNextCommand();
        }
    }

    render() {
        return (
            <div className="console command-window__container">
                <div className="console-window">
                    <div className="console-window__result">
                        { this.state.showResult
                            ? this.showResult()
                            : this.state.message
                        }
                    </div>
                </div>
                <form className="console-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        className="console-form__input"
                        value={this.state.command}
                        onChange={this.handleChange}
                        onKeyDown={this.commandHistory}
                    />
                    <input type="submit" className="console-form__submit" value="Выполнить" />
                </form>
            </div>
        );
    }
}

Console.propTypes = {
    commandsHist: PropTypes.array.isRequired,
    addCommand: PropTypes.func.isRequired,
};

export default connect(
    state => ({
        commandsHist: state.console.commands,
    }),
    { addCommand },
)(Console);


{/*<div className="console-window__placeholder">*/}
{/*<h3>Для ввода доступны следующие команды:</h3>*/}
{/*<ul className="console-window__placeholder-list">*/}
{/*<li>selectTab(tabIndex) — выбор таба с индексом tabIndex</li>*/}
{/*<li>swapTabs(tabIndex1, tabIndex2) — поменять местами в DOM табы*/}
{/*tabIndex1 и tabIndex2</li>*/}
{/*<li>showStat() — показать статистику</li>*/}
{/*</ul>*/}
{/*</div>*/}
