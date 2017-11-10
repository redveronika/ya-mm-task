import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveTab } from '../../reducers/tabs.reducer';

import './select-tab.css';

class SelectTab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            selectedTabId: null,
        };

        this.selectTab = this.selectTab.bind(this);
    }

    componentDidMount() {
        this.selectTab();
    }

    componentDidUpdate() {
        if (this.props.selectedTabId !== this.state.selectedTabId) {
            this.setState({ selectedTabId: this.props.selectedTabId });
            this.selectTab();
        }
    }

    selectTab() {
        const selectedTabId = this.props.selectedTabId !== null
        && this.props.selectedTabId.length === 1
            ? this.props.selectedTabId[0]
            : null;
        // Предполагаем, что массив с объектами табов остортирирован, id идут по возрастанию.
        const minTabId = this.props.tabs[0].id;
        const maxTabId = this.props.tabs[this.props.tabs.length - 1].id;
        // Проверяем, что значение id таба не пустое и такой номер таба существует.
        if (selectedTabId !== null
            && selectedTabId >= minTabId
            && selectedTabId <= maxTabId) {
            const selectedTab = this.props.tabs.filter(tab => (
                tab.id === +selectedTabId
            ))[0];
            this.setState({ message: `Выбран таб №${selectedTabId} "${selectedTab.title}".` });
            this.props.setActiveTab(+selectedTabId);
            // Навигируемся на выбранный таб.
            this.props.history.push(selectedTab.linkTo);
        } else if (selectedTabId === null) {
            // Сообщение, если пользователь не ввёл номер таба или ввёл несколько.
            this.setState({ message: 'Введите номер одного таба.' });
        } else {
            // Сообщение, если таба с указанным номер не существует.
            this.setState({
                message: `Не удалось выбрать таб №${selectedTabId}. 
                Доступны табы с ${minTabId} по ${maxTabId}.`,
            });
        }
    }

    render() {
        return (
            <p>{this.state.message}</p>
        );
    }
}

SelectTab.propTypes = {
    selectedTabId: PropTypes.array,
    tabs: PropTypes.array.isRequired,
    setActiveTab: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
};

SelectTab.defaultProps = {
    selectedTabId: null,
};

export default connect(
    state => ({
        tabs: state.tabs.tabs,
    }),
    { setActiveTab },
)(withRouter(SelectTab));

