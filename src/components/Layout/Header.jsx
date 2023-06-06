import React from 'react';
import { Link } from 'react-router-dom';
import { CART_ROUTE, MAIN_ROUTE } from '../../utils/consts';

import logo from '../../assets/icons/logo.svg';
import styles from './Layout.module.scss';

function Header() {
    return (
        <header>
            <div className={`${'container'} ${styles['header-wrapper']}`}>
                <Link to={MAIN_ROUTE}>
                    <img src={logo} alt="BurgerKing Логотип" />
                </Link>

                <nav>
                    <Link to={MAIN_ROUTE}>работа</Link>
                    <Link to={MAIN_ROUTE}>купоны</Link>
                    <Link to={MAIN_ROUTE}>king club</Link>
                    <Link to={CART_ROUTE}>корзина</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
