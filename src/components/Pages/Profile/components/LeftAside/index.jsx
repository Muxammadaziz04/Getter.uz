import { BlackPlusIcon, ExitIcon, ListIcon, SaveIcon } from 'components/UI/icons';
import cls from './LeftAside.module.scss'

const LeftAside = () => {
    return (
        <div className={cls.aside}>
            <ul className={cls.aside__list}>
                <li className={cls.aside__list__item}>
                    <span><ListIcon /> Мои статьи</span>
                    <ul>
                        <li>
                            <span><BlackPlusIcon />Добавить статью</span>
                        </li>
                    </ul>
                </li>
                <li className={cls.aside__list__item}>
                    <span><SaveIcon />Сoхраненные</span>
                </li>
            </ul>
            <button className={cls.aside__btn}>
                <ExitIcon /> Выйти
            </button>
        </div>
    );
}

export default LeftAside;
