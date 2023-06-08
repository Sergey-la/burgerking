import React from 'react';
import Categories from '../components/Categories/Categories';
import Dishes from '../components/Dishes/Dishes';

function MainPage() {
    return (
        <React.Fragment>
            <Categories />
            <Dishes />
        </React.Fragment>
    );
}

export default MainPage;
