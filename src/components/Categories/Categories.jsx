import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory, setLoaded } from '../../redux/slices/filterCategory';

import styles from './Categories.module.scss';

function Categories() {
    const [activeCategory, setActiveCategory] = React.useState(0);

    const dispatch = useDispatch();

    const onClickCategory = (i) => {
        dispatch(setLoaded(true));
        setActiveCategory(i);
        dispatch(changeCategory(i + 1));
    };

    const titleCategory = useSelector(
        (state) => state.filterCategory.titleCategory
    );

    return (
        <div className={styles.categories}>
            <ul className="container">
                {titleCategory.map((item, i) => (
                    <li
                        key={i}
                        onClick={() => onClickCategory(i)}
                        className={
                            activeCategory === i ? `${styles.active}` : ''
                        }
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;
