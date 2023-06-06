import React from 'react';
import styles from './Categories.module.scss';

function Categories() {
    return (
        <div className={styles.categories}>
            <ul className="container">
                <li className={styles.active}>Острое меню</li>
                <li>Кинг Комбо</li>
                <li>Кинг Комбо</li>
                <li>Бургеры из говядины</li>
                <li>Бургеры из Курицы</li>
            </ul>
        </div>
    );
}

export default Categories;
