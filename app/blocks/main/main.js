import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Tabs } from '../../blocks';

import './main.css';

const tabs = [
    {
        title: 'Прогресс бар',
        linkTo: '/progress-bar',
    },
    {
        title: 'Кнопка',
        linkTo: '/button',
    },
];

const Main = () => {
    return (
        <main>
            <header className="header">
                <Tabs tabs={tabs} />
            </header>
        </main>
    );
};
export default Main;
