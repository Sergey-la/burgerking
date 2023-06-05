import React from 'react';
import logo from '../../assets/icons/logo.svg';

function Header() {
    return (
        <header>
            <div className="header-wrapper">
                <a className="header-wrapper__logo" href="/">
                    <img src={logo} alt="BurgerKing Логотип" />
                </a>

                <nav>
                    <a href="/">работа</a>
                    <a href="/">купоны</a>
                    <a href="/">king club</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
