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
        // Предполагаем, что массив с объектами табов остортирирован, id идут по возрастанию
        const minTabId = this.props.tabs[0].id;
        const maxTabId = this.props.tabs[this.props.tabs.length - 1].id;
        if (this.props.selectedTabId !== ''
            && this.props.selectedTabId >= minTabId
            && this.props.selectedTabId <= maxTabId) {
            const selectedTab = this.props.tabs.filter(tab => (
                tab.id === +this.props.selectedTabId
            ))[0];
            this.setState({ message: `Выбран таб №${this.props.selectedTabId} "${selectedTab.title}".` });
            this.props.setActiveTab(+this.props.selectedTabId);
            this.props.history.push(selectedTab.linkTo);
        } else if (this.props.selectedTabId === '') {
            this.setState({ message: 'Введите номер таба.' });
        } else {
            this.setState({
                message: `Не удалось выбрать таб №${this.props.selectedTabId}. 
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
    selectedTabId: PropTypes.string.isRequired,
    tabs: PropTypes.array.isRequired,
    setActiveTab: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
};

export default connect(
    state => ({
        tabs: state.tabs.tabs,
    }),
    { setActiveTab },
)(withRouter(SelectTab));

