import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { reorderTabs } from '../../reducers/tabs.reducer';

import './swap-tabs.css';

class SwapTabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            args: null,
            message: '',
        };

        this.reorder = this.reorder.bind(this);
    }

    componentDidMount() {
        this.setState({ args: this.props.args, timeMounted: this.props.time });
        this.reorder();
    }

    componentDidUpdate() {
        if (this.props.args !== this.state.args || this.props.time !== this.state.timeMounted) {
            this.setState({ args: this.props.args, timeMounted: this.props.time });
            this.reorder();
        }
    }

    reorder() {
        const tabsId = this.props.args.split(',');
        // Предполагаем, что массив с объектами табов остортирирован, id идут по возрастанию
        const minTabId = this.props.tabs[0].id;
        const maxTabId = this.props.tabs[this.props.tabs.length - 1].id;
        if (this.props.args !== ''
            && tabsId.length === 2
            && +tabsId[0] >= minTabId
            && +tabsId[0] <= maxTabId
            && +tabsId[1] >= minTabId
            && +tabsId[1] <= maxTabId) {
            const tabTitle1 = this.props.tabs[+tabsId[0] - 1].title;
            const tabTitle2 = this.props.tabs[+tabsId[1] - 1].title;
            const newTabs = this.props.tabs.map((tab, i, arr) => {
                if (tab.id === +tabsId[0]) {
                    tab = {
                        ...arr[+tabsId[1] - 1],
                        id: tab.id,
                    };
                } else if (tab.id === +tabsId[1]) {
                    tab = {
                        ...arr[+tabsId[0] - 1],
                        id: tab.id,
                    };
                }
                return tab;
            });
            this.setState({ message: `Поменяли табы №${tabsId[0]} "${tabTitle1}"
        и №${tabsId[1]} "${tabTitle2}" местами.` });
            this.props.reorderTabs(newTabs);
        } else if (this.props.args === '') {
            this.setState({ message: 'Введите номера табов в качестве аргументов.' });
        } else if (tabsId.length !== 2) {
            this.setState({ message: 'Вы ввели неверное количество аргументов. Необходимо ввести 2 аргумента.' });
        } else {
            this.setState({ message: `Не удалось поменять местами табы №${tabsId[0]} и №${tabsId[1]}. 
                Доступны табы с ${minTabId} по ${maxTabId}.` });
        }
    }

    render() {
        return (
            <p>{this.state.message}</p>
        );
    }
}

SwapTabs.propTypes = {
    args: PropTypes.string.isRequired,
    tabs: PropTypes.array.isRequired,
    reorderTabs: PropTypes.func.isRequired,
    time: PropTypes.number.isRequired,
};

export default connect(
    state => ({
        tabs: state.tabs.tabs,
    }),
    { reorderTabs },
)(SwapTabs);
