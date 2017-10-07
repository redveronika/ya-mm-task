import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setSessionTime, setActiveTabOpenTime } from '../../reducers/tabs.reducer';

import './text.css';

class Text extends Component {
    componentWillMount() {
        this.props.setActiveTabOpenTime(this.props.history.location.time);
    }

    componentWillUnmount() {
        const time = new Date().valueOf();
        this.props.setSessionTime('text', time - this.props.activeTabOpenTime);
    }

    render() {
        return (
            <div className="text">
                <h2 className="text__title">Тема: «Сюжетный анапест:  основные моменты»</h2>
                <div className="text__content">
                    <p>
                        Нельзя восстановить истинной хронологической последовательности событий,
                        потому что мелькание мыслей параллельно. Структура аллитерирует мелодический
                        реформаторский пафос, однако дальнейшее развитие приемов декодирования
                        мы находим в работах академика В.Виноградова. Аллюзия наблюдаема.
                        Аллитерация, как бы это ни казалось парадоксальным, параллельна.
                        Мифопорождающее текстовое устройство прочно вызывает эпитет,
                        причём сам Тредиаковский свои стихи мыслил как “стихотворное дополнение”
                        к книге Тальмана.
                    </p>
                    <p>
                        Речевой акт традиционно осознаёт музыкальный дольник, но не рифмами.
                        Различное расположение просветляет мелодический образ,
                        таким образом постепенно
                        смыкается с сюжетом. Силлабо-тоника, в первом приближении,
                        просветляет мелодический ямб,
                        таким образом в некоторых случаях образуются рефрены,
                        кольцевые композиции, анафоры.
                    </p>
                    <p>
                        Представленный лексико-семантический анализ является
                        психолингвистическим в своей основе,
                        но мифопорождающее текстовое устройство аллитерирует
                        мифологический генезис свободного стиха,
                        об этом свидетельствуют краткость и завершенность формы, бессюжетность,
                        своеобразие тематического развертывания.
                    </p>
                    <p>
                        Драма, по определению отражает брахикаталектический стих,
                        хотя в существование или актуальность этого он не верит,
                        а моделирует собственную реальность.
                        Лексика осознаёт литературный палимпсест, об этом свидетельствуют краткость
                        и завершенность формы, бессюжетность,
                        своеобразие тематического развертывания.
                    </p>
                    <ul className="text__list">
                        <li><b>Курит ли трупка мой</b></li>
                        {/* eslint-disable jsx-a11y/href-no-hash */}
                        <li><a href="#" title="из трупка тфой пихтишь">из трупка тфой пихтишь</a></li>
                        <li className="text__list-item text__list-item--underline">Или мой кафе пил</li>
                        <li>тфой в щашешка сидишь</li>
                    </ul>
                </div>
            </div>
        );
    }
}


Text.propTypes = {
    setSessionTime: PropTypes.func.isRequired,
    setActiveTabOpenTime: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    activeTabOpenTime: PropTypes.any,
};

Text.defaultProps = {
    activeTabOpenTime: 0,
};

export default connect(
    state => ({
        activeTabOpenTime: state.tabs.activeTabOpenTime,
    }),
    { setSessionTime, setActiveTabOpenTime },
)(withRouter(Text));
