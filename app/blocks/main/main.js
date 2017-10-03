import React from 'react';

import { Tabs } from '../../blocks';

import './main.css';

const tabs = [
    {
        id: 1,
        title: 'Прогресс бар',
        linkTo: '/progress-bar',
    },
    {
        id: 2,
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
