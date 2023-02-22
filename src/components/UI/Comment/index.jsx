import Image from 'next/image';
import cls from './Comment.module.scss';

const Comment = () => {
    return (
        <div className={cls.comment}>
            <div className={cls.comment__img}>
                <Image 
                    src='/avatars/abbos_janizakov.png'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={cls.comment__content}>
                <div className={cls.comment__content__info}>
                    <h4>Cameron Williamson</h4>
                    <span>Frontend Developer</span>
                </div>
                <div className={cls.comment__content__text}>
                    <p>Timing, perseverance, and ten years of trying will eventually make you look like an overnight success. Timing, perseverance, and ten years of trying will eventually make you look like an overnight success.</p>
                    <button>Показать ещё</button>
                </div>
            </div>
        </div>
    );
}

export default Comment;
