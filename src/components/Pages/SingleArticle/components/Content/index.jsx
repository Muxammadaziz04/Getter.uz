import CircleButton from 'components/UI/Buttons/CircleButton';
import Comment from 'components/UI/Comment';
import { LargeCommentIcon, LargiLikeIcon, ShareIcon } from 'components/UI/icons';
import Image from 'next/image';
import Profile from '../Profile';
import cls from './Content.module.scss'

const Content = () => {
    return (
        <div className={cls.content}>
            <div className={cls.content__btns}>
                <CircleButton>
                    <LargiLikeIcon />
                </CircleButton>
                <CircleButton>
                    <LargeCommentIcon />
                </CircleButton>
                <CircleButton>
                    <ShareIcon />
                </CircleButton>
            </div>
            <div className={cls.content__wrapper}>
                <h2 className={cls.content__title}>UX/UI Design Trends That Will Dominate 2022</h2>
                <div className={cls.content__date}>
                    <span>January 25, 2023</span>
                    <span>6 minutes</span>
                </div>
                <Profile />
                <div className={cls.content__img}>
                    <Image 
                        src='/articles/6.png'
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
                <div className={cls.content__text}>
                    <h3>Креативные решения</h3>
                    <p>Какой бы ни была маркетинговая цель конкретной кампании, в ее основе лежат две основополагающие идеи: природа продукта и проблема клиента, которую он решает</p>
                    <p>Таким образом, вместо работы с разнообразием предложений, которое часто определяет дизайнерские решения в электронной коммерции, на этот раз команде предстояло решить интересную задачу — эмоционально, убедительно и всесторонне презентовать довольно инновационный и узкоспециализированный продукт. Необходимо было создать дизайн, который выделит бренд из толпы на чрезвычайно конкурентном рынке продуктов питания.</p>
                    <p>Первая задача, над которой предстояло поработать, заключалась в том, чтобы придумать дизайн упаковки, сочетающий эмоциональность и функциональность и эффективно работающий как в материальной, так и в цифровой среде. Результатом творческих поисков стала яркая концепция, </p>
                    <h3>Пять главных этапов</h3>
                    <ul>
                        <li>Таким образом, вместо работы с разнообразием </li>
                        <li>Контент разделен на легко сканируемые</li>
                        <li>Одним из ключевых аспектов</li>
                        <li>Другой раздел веб-страницы</li>
                    </ul>
                    <p>Первая задача, над которой предстояло поработать, заключалась в том, чтобы придумать дизайн упаковки, сочетающий эмоциональность и функциональность и эффективно работающий как в материальной, так и в цифровой среде. Результатом творческих поисков стала яркая концепция, </p>
                </div>
                <div className={cls.content__input}>
                    <Profile />
                    <label>
                        <input type="text" placeholder='Оставте свои комментари'/>
                        <button>Отправить</button>
                    </label>
                </div>
                <div className={cls.content__comments}>
                    <span>Комментарии</span>
                    <div className={cls.content__comments__list}>
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;