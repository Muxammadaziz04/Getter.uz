import { BlackPlusIcon, ExitIcon, ListIcon, SaveIcon } from 'components/UI/icons';
import { getCookie, removeCookies } from 'cookies-next';
import { useRouter } from 'next/router';
import cls from './LeftAside.module.scss'

const LeftAside = () => {
    const router = useRouter()

    return (
        <div className={cls.aside}>
            <ul className={cls.aside__list}>
                <li className={cls.aside__list__item}>
                    <span><ListIcon /> Мои статьи</span>
                    <ul>
                        <li onClick={() => router.push('/create-article')}>
                            <span><BlackPlusIcon />Добавить статью</span>
                        </li>
                    </ul>
                </li>
                <li className={cls.aside__list__item}>
                    <span><SaveIcon />Сoхраненные</span>
                </li>
            </ul>
            <button className={cls.aside__btn} onClick={() => {
                removeCookies('refresh_token_user')
                removeCookies('user_id')
                removeCookies('access_token_user')
                removeCookies('refreshToken')
                removeCookies('accessToken')
                router.push('/auth/login')
            }}>
                <ExitIcon /> Выйти
            </button>
        </div>
    );
}

export default LeftAside;
