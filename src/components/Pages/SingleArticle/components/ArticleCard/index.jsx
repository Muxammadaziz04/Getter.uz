import RoundedButton from 'components/UI/Buttons/RoundedButton';
import { CalendarIcon, CommentIcon, LikeIcon } from 'components/UI/icons';
import Image from 'next/image';
import cls from './ArticleCard.module.scss'
import { categories } from './data';

const ArticleCard = ({
    image = '',
    hashtags = '',
    title = '',
    likes = '325',
    comments = '325',
    date = '6.01.2023',
}) => {
    return (
        <div className={cls.card}>
            <div className={cls.card__content}>
                <div className={cls.card__content__hashtags}>
                    {
                        categories?.length > 0 && categories.map(ctg =>
                            <RoundedButton key={ctg.id}>
                                {ctg.hashtag}
                            </RoundedButton>
                        )
                    }
                </div>
                <h3 className={cls.card__content__title}>России на автодоме и говорит про цифровой дизайн Нескінчен.. </h3>
                <div className={cls.card__content__data}>
                    <span><LikeIcon />{likes}</span>
                    <span><CommentIcon />{comments}</span>
                    <span><CalendarIcon />{date}</span>
                </div>
            </div>
            <div className={cls.card__img}>
                <Image
                    src='/articles/1.png'
                    layout='fill'
                    objectFit='cover'
                    alt='title'
                />
            </div>
        </div>
    );
}

export default ArticleCard;
