import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.scss';

function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;
