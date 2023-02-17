import Image from 'next/image';
import RoundedButton from '../Buttons/RoundedButton';
import { CalendarIcon, CommentIcon, LikeIcon } from '../icons';
import cls from './ArticleCard.module.scss'

const ArticleCard = ({ 
    hashtags = [], 
    title = '', 
    avatar = '/',
    fullName = '',
    job = '',
    likes = 0,
    comments = 0,
    date = '',
    image = '/'
}) => {
    return (
        <div className={cls.card}>
            <div className={cls.card__content}>
                <div className={cls.card__content__hashtags}>
                    {
                        hashtags?.length > 0 && hashtags.map((tag, index) =>
                            <RoundedButton key={index}>{tag}</RoundedButton>
                        )
                    }
                </div>
                <h2 className={cls.card__content__title}>{title}</h2>
                <div className={cls.card__content__info}>
                    <div className={cls.card__content__profile}>
                        <div className={cls.card__content__profile__ava}>
                            <Image
                                src={avatar}
                                layout='fill'
                                objectFit='cover'
                                alt={fullName}
                            />
                        </div>
                        <div className={cls.card__content__profile__info}>
                            <h4>{fullName}</h4>
                            <span>{job}</span>
                        </div>
                    </div>
                    <div className={cls.card__content__info__data}>
                        <span><LikeIcon /> {likes}</span>
                        <span><CommentIcon /> {comments}</span>
                        <span><CalendarIcon /> {date}</span>
                    </div>
                </div>
            </div>
            <div className={cls.card__img}>
                <Image
                    src={image}
                    layout='fill'
                    objectFit='cover'
                    alt={title}
                />
            </div>
        </div>
    );
}

export default ArticleCard;
