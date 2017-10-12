import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addCommand } from '../../reducers/console.reducer';
import { SelectTab, ShowStat, SwapTabs, ManageRating, ManageProgress } from '../../blocks';

import './console.css';

// Команды, которые доступны пользователю для ввода в консоль (без параметров).
const SELECT_TAB = 'selectTab()';
const SHOW_STAT = 'showStat()';
const SWAP_TABS = 'swapTabs()';
const SET_RATING_BEST = 'setBest()';
const SET_RATING_SCORE = 'setScore()';
const SET_RATING_ACTIVE_COLOR = 'setActiveColor()';
const SET_RATING_INACTIVE_COLOR = 'setInactiveColor()';
const SET_PROGRESS = 'setProgress()';

class Console extends Component {
    constructor(props) {
        super(props);
        this.state = {
            command: '',
            outputCommand: '',
            availableCommands: [
                SELECT_TAB, SHOW_STAT, SWAP_TABS,
                SET_RATING_BEST, SET_RATING_SCORE,
                SET_RATING_ACTIVE_COLOR, SET_RATING_INACTIVE_COLOR,
                SET_PROGRESS,
            ],
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
        const command = this.state.command;
        // Сохраняем в state введённую команду для вывода в консоль.
        this.setState({ outputCommand: command });
        let strArgs;
        let strCommand;
        // Проверяем, что в введённой команде присутствуют скобки.
        if (command.indexOf('(') > -1 && command.indexOf(')') > -1) {
            // Удаляем пробелы из команды и аргументы выносим в отдельную переменную.
            strArgs = command.trim().substring(command.indexOf('(') + 1, command.indexOf(')'));
            // Из команды удаляем параметры.
            strCommand = command.replace(strArgs, '');
        }
        // Проверяем, что введённая команда валидна и есть в списке доступных команд.
        if (typeof strCommand !== 'undefined' && this.state.availableCommands.includes(strCommand)) {
            this.setState({
                showResult: strCommand,
                strArgs,
                time: new Date().valueOf(),
                commandHistId: this.props.commandsHist.length,
            });
        } else if (command.trim() === '') {
            this.setState({ message: '', showResult: null });
        } else {
            // Если команда невалидна или её нет в списке доступных - выводим сообщение об ошибке.
            this.setState({ showResult: null });
            this.setState({ message: 'Такой команды не существует! Попробуйте другую команду.' });
        }
        if (command.trim() !== '') {
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
        default: return null;
        }
    }

    // Действие на нажатие кнопки "↑".
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
                this.showPrevCommand();
            } else if (event.key === 'ArrowDown') {
                this.showNextCommand();
            }
        }
    }

    render() {
        return (
            <div className="console command-window__container">
                <div className="console-window">
                    <div className="console-window__result">
                        <p>{this.state.outputCommand && `/> ${this.state.outputCommand}`}</p>
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
