import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoaded } from '../../redux/slices/filterCategory';

import styles from './Dishes.module.scss';
import DishCard from './DishCard';
import Loader from '../Loader/Loader';

function Dishes() {
    const [dishes, setDishes] = React.useState([]);

    const categoryId = useSelector((state) => state.filterCategory.categoryId);
    const titleCategory = useSelector(
        (state) => state.filterCategory.titleCategory
    );
    const loaded = useSelector((state) => state.filterCategory.loaded);

    const dispatch = useDispatch();

    React.useEffect(() => {
        fetch(
            `https://6480bd15f061e6ec4d49caa8.mockapi.io/dishes?category=${categoryId}`
        )
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setDishes(json);
                dispatch(setLoaded(false));
            });
    }, [categoryId, dispatch, loaded]);
    console.log(1)

    return (
        <div className="container">
            <h2>{titleCategory[categoryId - 1]}</h2>
            {loaded && (
                <>
                    <Loader />
                </>
            )}
            {!loaded && (
                <React.Fragment>
                    <div className={styles['dishes-wrapper']}>
                        {dishes.map((item) => (
                            <DishCard
                                key={item.id}
                                imageUrl={item.imageUrl}
                                title={item.title}
                                price={item.price}
                            />
                        ))}
                    </div>
                </React.Fragment>
            )}
        </div>
    );
}

export default Dishes;
