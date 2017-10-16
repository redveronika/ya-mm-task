import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setSessionTime } from '../../reducers/tabs.reducer';

import './text.css';

class Text extends Component {
    componentWillUnmount() {
        const time = new Date().valueOf();
        // Добавляем время текущей сессии на данной вкладке в стор.
        this.props.setSessionTime('text', time - this.props.activeTabOpenTime);
    }

    render() {
        return (
            <div className="text">
                <h2 className="text__title">Тема: «Сюжетный анапест:  основные моменты»</h2>
                <div className="text__content">
                    <p className="text__paragraph">
                        Нельзя восстановить истинной хронологической последовательности событий,
                        потому что мелькание мыслей параллельно. Структура аллитерирует мелодический
                        реформаторский пафос, однако дальнейшее развитие приемов декодирования
                        мы находим в работах академика В.Виноградова. Аллюзия наблюдаема.
                        Аллитерация, как бы это ни казалось парадоксальным, параллельна.
                        Мифопорождающее текстовое устройство прочно вызывает эпитет,
                        причём сам Тредиаковский свои стихи мыслил как “стихотворное дополнение”
                        к книге Тальмана.
                    </p>
                    <p className="text__paragraph">
                        Речевой акт традиционно осознаёт музыкальный дольник, но не рифмами.
                        Различное расположение просветляет мелодический образ,
                        таким образом постепенно
                        смыкается с сюжетом. Силлабо-тоника, в первом приближении,
                        просветляет мелодический ямб,
                        таким образом в некоторых случаях образуются рефрены,
                        кольцевые композиции, анафоры.
                    </p>
                    <p className="text__paragraph">
                        Представленный лексико-семантический анализ является
                        психолингвистическим в своей основе,
                        но мифопорождающее текстовое устройство аллитерирует
                        мифологический генезис свободного стиха,
                        об этом свидетельствуют краткость и завершенность формы, бессюжетность,
                        своеобразие тематического развертывания.
                    </p>
                    <p className="text__paragraph">
                        Драма, по определению отражает брахикаталектический стих,
                        хотя в существование или актуальность этого он не верит,
                        а моделирует собственную реальность.
                        Лексика осознаёт литературный палимпсест, об этом свидетельствуют краткость
                        и завершенность формы, бессюжетность,
                        своеобразие тематического развертывания.
                    </p>
                    <ul className="text__list">
                        <li className="text__list-item"><b>Курит ли трупка мой</b></li>
                        {/* eslint-disable jsx-a11y/href-no-hash */}
                        <li className="text__list-item"><a href="#" title="из трупка тфой пихтишь">из трупка тфой пихтишь</a></li>
                        <li className="text__list-item text__list-item--underline">Или мой кафе пил</li>
                        <li className="text__list-item">тфой в щашешка сидишь</li>
                    </ul>
                </div>
            </div>
        );
    }
}


Text.propTypes = {
    setSessionTime: PropTypes.func.isRequired,
    activeTabOpenTime: PropTypes.any,
};

Text.defaultProps = {
    activeTabOpenTime: 0,
};

export default connect(
    state => ({
        activeTabOpenTime: state.tabs.activeTabOpenTime,
    }),
    { setSessionTime },
)(Text);
