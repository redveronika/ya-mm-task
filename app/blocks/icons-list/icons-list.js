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
                <div className="icons-list__block icons-list__block--type--good-boys">
                    <div className="icon icon--type--chrome">
                        <img className="icon__img icon__img--type--chrome" width="120" height="auto" src={chromeIcon} alt="" />
                        {/*
                            Fallback, если изображение не загрузилось.
                            У остальных иконок отображается значение из аттрибута "alt",
                            но у данной иконки требовалось сделать буквы разного цвета,
                            поэтому такое решение.
                        */}
                        <div className="icon__alt icon__alt--type-chrome">
                            <span style={{ color: '#33b43b' }}>Ch</span>
                            <span style={{ color: '#da0000' }}>ro</span>
                            <span style={{ color: '#fdd710' }}>me</span>
                        </div>
                    </div>
                    <div className="icon">
                        <img className="icon__img icon__img--type--firefox" width="120" height="auto" src={firefoxIcon} alt="Firefox" />
                    </div>
                    <div className="icon">
                        <img className="icon__img icon__img--type--opera" width="120" height="auto" src={operaIcon} alt="Opera" />
                    </div>
                    <div className="icon">
                        <img className="icon__img icon__img--type--safari" width="111" height="auto" src={safariIcon} alt="Safari" />
                    </div>
                </div>
                {/* Блок для иконок браузеров в стороне стоящих. */}
                <div className="icons-list__block icons-list__block--type--bad-boy">
                    <div className="icon">
                        <img className="icon__img icon__img--type--ie" width="120" height="auto" src={ieIcon} alt="Internet Explorer" />
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
