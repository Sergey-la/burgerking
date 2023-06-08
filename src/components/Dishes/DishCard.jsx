import React from 'react';
import styles from './Dishes.module.scss';

function DishCard({ ...props }) {
    return (
        <div className={styles['dish-card']}>
            <div className={styles['dish-card__img']}>
                <img
                    src={props.imageUrl}
                    alt={props.title}
                    width={256}
                    height={256}
                />
            </div>
            <h3>{props.title}</h3>
            <div className="price">{props.price}</div>
        </div>
    );
}

export default DishCard;
