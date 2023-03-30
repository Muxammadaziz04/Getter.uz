import Image from 'next/image';
import { useState } from 'react';
import { LikeIcon, NextArrowIcon } from '../icons';
import cls from './ProductCard.module.scss'

const ProductCard = ({ image, title, desc, link = '', likes }) => {
    const [addedLike, setAddedLike] = useState(false)
    return (
        <div className={cls.card}>
            <div className={cls.card__img}>
                <Image
                    src={image}
                    layout='fill'
                    objectFit='cover'
                    alt={title}
                />
                <div className={cls.hover_el}>
                    <a href={link} target='_blank' rel="noreferrer" >{link.match(/:\/\/(.[^/]+)/)[1]}</a>
                    <div>
                        <div className={cls.hover_el__likes} onClick={() => setAddedLike(state => !state)}>
                            {addedLike ? 0 + 1 : 0} •
                            <LikeIcon
                                fill={addedLike ? 'white' : ''}
                            />
                        </div>
                        <a
                            href={link}
                            target='_blank'
                            rel="noreferrer"
                            className={cls.hover_el__btn}
                        ><NextArrowIcon /></a>
                    </div>
                </div>
            </div>
            <div className={cls.card__info}>
                <h3 className={cls.card__info__title}>{title}</h3>
                <p className={cls.card__info__desc}>{desc}</p>
            </div>
        </div>
    );
}

export default ProductCard;
