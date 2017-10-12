import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setSessionTime } from '../../reducers/tabs.reducer';

import './icons-list.css';

import chromeIcon from './../../assets/imgs/chrome.png';
import firefoxIcon from '../../assets/imgs/firefox.png';
import operaIcon from '../../assets/imgs/opera.png';
import safariIcon from '../../assets/imgs/safari.png';
import ieIcon from '../../assets/imgs/ie.png';

class IconsList extends Component {
    componentWillUnmount() {
        const time = new Date().valueOf();
        // Добавляем время текущей сессии на данной вкладке в стор.
        this.props.setSessionTime('icons-list', time - this.props.activeTabOpenTime);
    }

    render() {
        return (
            <div className="icons-list">
                <div className="icons-list__good-boys icons-list__block">
                    <div className="chrome-icon">
                        <img className="chrome-icon__img" width="120" height="auto" src={chromeIcon} alt="" />
                        {/*
                            Fallback, если изображение не загрузилось.
                            У остальных иконок отображается значение из аттрибута "alt",
                            но у данной иконки требовалось сделать буквы разного цвета,
                            поэтому такое решение.
                        */}
                        <div className="chrome-icon__alt">
                            <span style={{ color: '#33b43b' }}>Ch</span>
                            <span style={{ color: '#da0000' }}>ro</span>
                            <span style={{ color: '#fdd710' }}>me</span>
                        </div>
                    </div>
                    <div className="firefox-icon icons-list__img-wrapper">
                        <img className="firefox-icon__img icons-list__img" width="120" height="auto" src={firefoxIcon} alt="Firefox" />
                    </div>
                    <div className="opera-icon icons-list__img-wrapper">
                        <img className="opera-icon__img icons-list__img" width="120" height="auto" src={operaIcon} alt="Opera" />
                    </div>
                    <div className="safari-icon icons-list__img-wrapper">
                        <img className="safari-icon__img icons-list__img" width="111" height="auto" src={safariIcon} alt="Safari" />
                    </div>
                </div>
                {/* Блок для иконок браузеров в стороне стоящих. */}
                <div className="icons-list__bad-boy icons-list__block">
                    <div className="ie-icon icons-list__img-wrapper">
                        <img className="ie-icon__img icons-list__img" width="120" height="auto" src={ieIcon} alt="Internet Explorer" />
                    </div>
                </div>
            </div>
        );
    }
}


IconsList.propTypes = {
    setSessionTime: PropTypes.func.isRequired,
    activeTabOpenTime: PropTypes.any,
};

IconsList.defaultProps = {
    activeTabOpenTime: 0,
};

export default connect(
    state => ({
        activeTabOpenTime: state.tabs.activeTabOpenTime,
    }),
    { setSessionTime },
)(IconsList);
