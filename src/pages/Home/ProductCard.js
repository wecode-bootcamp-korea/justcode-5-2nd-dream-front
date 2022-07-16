import React from 'react'
import css from './ProductCard.module.scss';
const ProductCard = ({ item }) => {
    return (
        <div>
            <img className={css.pic} src={item?.productImg} />
            <div className={css.nam}>{item?.productName}</div>
            <div className={css.com}>{item?.coment}</div>
            <div className={css.pri}>{item?.price} 원</div>
        </div>
    )
}

export default ProductCard
