import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setSessionTime, setActiveTabOpenTime } from '../../reducers/tabs.reducer';

import './icons-list.css';

import '../../assets/imgs/chrome.png';
import '../../assets/imgs/firefox.png';
import '../../assets/imgs/opera.png';
import '../../assets/imgs/safari.png';
import '../../assets/imgs/ie.png';

class IconsList extends Component {
    componentWillMount() {
        this.props.setActiveTabOpenTime(this.props.history.location.time);
    }

    componentWillUnmount() {
        const time = new Date().valueOf();
        this.props.setSessionTime('icons-list', time - this.props.activeTabOpenTime);
    }

    render() {
        return (
            <div className="icons-list">
                <div className="icons-list__good-boys icons-list__block">
                    <div className="chrome-icon">
                        <img className="chrome-icon__img" src="../../../assets/imgs/chrome.png" />
                        <div className="chrome-icon__alt">
                            <span style={{ color: '#33b43b' }}>Ch</span>
                            <span style={{ color: '#da0000' }}>ro</span>
                            <span style={{ color: '#fdd710' }}>me</span>
                        </div>
                    </div>
                    <div className="icons-list__img-wrapper">
                        <img className="icons-list__img" src="../../assets/imgs/firefox.png" alt="Firefox" style={{ color: '#dc6a18' }} />
                    </div>
                    <div className="icons-list__img-wrapper">
                        <img className="icons-list__img" src="../../assets/imgs/opera.png" alt="Opera" style={{ color: '#cd1010' }} />
                    </div>
                    <div className="icons-list__img-wrapper">
                        <img className="icons-list__img" src="../../assets/imgs/safari.png" alt="Safari" style={{ color: '#787878' }} />
                    </div>
                </div>
                <div className="icons-list__bad-boy icons-list__block">
                    <div className="icons-list__img-wrapper">
                        <img className="icons-list__img" src="../../assets/imgs/ie.png" alt="Internet Explorer" style={{ color: '#0579b0' }} />
                    </div>
                </div>
            </div>
        );
    }
}


IconsList.propTypes = {
    setSessionTime: PropTypes.func.isRequired,
    setActiveTabOpenTime: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    activeTabOpenTime: PropTypes.any,
};

IconsList.defaultProps = {
    activeTabOpenTime: 0,
};

export default connect(
    state => ({
        activeTabOpenTime: state.tabs.activeTabOpenTime,
    }),
    { setSessionTime, setActiveTabOpenTime },
)(withRouter(IconsList));
