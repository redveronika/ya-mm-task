import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addCommand } from '../../reducers/console.reducer';
import { SelectTab, ShowStat, SwapTabs, ManageRating, ManageProgress, Help } from '../../blocks';
import {
    parseCommand, SELECT_TAB, SET_RATING_SCORE, SET_RATING_BEST, SHOW_STAT, SWAP_TABS,
    SET_RATING_ACTIVE_COLOR, SET_RATING_INACTIVE_COLOR, SET_PROGRESS,
} from '../../utils/shared.function';

import './console.css';

export class Console extends Component {
    constructor(props) {
        super(props);
        this.state = {
            command: '',
            outputCommand: '',
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
        // На изменения значения инпута в консоли меняет значение command в state.
        this.setState({ command: event.target.value });
    }

    // Обрабатываем событие submit формы ввода в консоль.
    handleSubmit(event) {
        event.preventDefault();
        const commandsHist = this.props.commandsHist;
        const command = this.state.command.trim();

        // Сохраняем в state введённую команду для вывода в консоль.
        this.setState({ outputCommand: command });

        const { strArgs = '', strCommand } = parseCommand(command);

        this.setState({
            showResult: strCommand || command,
            strArgs: strArgs || '',
            time: Date.now(),
            commandHistId: commandsHist.length,
        });

        if (command !== '' && command !== commandsHist[commandsHist.length - 1]) {
            // Добавляем команду в историю комманд в стор.
            this.props.addCommand(command);
        }
    }

    // В зависимости от введённой команды вызываем тот или иной компонент.
    showResult() {
        switch (this.state.showResult) {
        case SHOW_STAT:
            return <ShowStat time={this.state.time} />;
        case SELECT_TAB:
            return <SelectTab selectedTabId={this.state.strArgs} />;
        case SWAP_TABS:
            return <SwapTabs time={this.state.time} args={this.state.strArgs} />;
        case SET_RATING_BEST:
        case SET_RATING_SCORE:
        case SET_RATING_ACTIVE_COLOR:
        case SET_RATING_INACTIVE_COLOR:
            return (<ManageRating
                time={this.state.time}
                command={this.state.showResult}
                args={this.state.strArgs}
            />);
        case SET_PROGRESS:
            return <ManageProgress time={this.state.time} args={this.state.strArgs} />;
        default:
            const message = this.state.showResult === '' ?
                'Введён пустой поисковый запрос. Список доступных команд представлен ниже.' :
                'Такой команды не существует! Ознакомьтесь с информацией ниже.';
            return <Help message={message} />;
        }
    }

    // Действие на нажатие кнопки "↑".
    showPrevCommand(event) {
        const prevCommandId = this.state.commandHistId !== null ?
            this.state.commandHistId - 1 :
            this.props.commandsHist.length - 2;
        if (prevCommandId >= 0) {
            this.setState({
                commandHistId: prevCommandId,
                command: this.props.commandsHist[prevCommandId],
            });
            event.preventDefault();
        }
    }

    // Действие на нажатие кнопки "↓".
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
        // Обрабатываем нажатия на "↑" и "↓" только, если история команд не пуста.
        if (this.props.commandsHist.length > 0) {
            if (event.key === 'ArrowUp') {
                this.showPrevCommand(event);
            } else if (event.key === 'ArrowDown') {
                this.showNextCommand();
            }
        }
    }

    render() {
        return (
            <div className="console">
                <div className="console-window">
                    <div className="console-window__wrapper">
                        <div className="console-window__result">
                            <p>{this.state.outputCommand ?
                                `/> ${this.state.outputCommand}` :
                                null}
                            </p>
                            { this.state.showResult !== null ? this.showResult() : null }
                        </div>
                    </div>
                </div>
                <form className="console-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        className="console-form__input"
                        value={this.state.command}
                        onChange={this.handleChange}
                        onKeyDown={this.commandHistory}
                        placeholder="Введите команду"
                        aria-label="Введите команду"
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
