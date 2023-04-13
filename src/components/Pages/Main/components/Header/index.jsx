import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AnimatedBorder from 'components/UI/AnimatedBorder';
import AnimatedCircle from 'components/UI/AnimatedCircle';
import Avatar from 'components/UI/Avatar';
import Container from 'components/UI/Container';
import { PlusIcon, RightArrow } from 'components/UI/icons';
import Navbar from 'components/UI/Navbar';
import { navLinks } from '../../../../Layouts/Main/data';
import { avatars } from './data';
import cls from './Header.module.scss'
import { getCookie } from 'cookies-next';

const Header = () => {
    const router = useRouter()
    const [colorChanget, setColorChanget] = useState(false)
    const query = router?.asPath.split('?')?.[1]?.split('=')?.[1]
    const token = getCookie('accessToken')
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                const vh = window.innerHeight
                if (vh - 82 <= window.scrollY) {
                    setColorChanget(true)
                } else {
                    setColorChanget(false)
                }
            }
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <>
            <div className={cls.wrapper}>
                <div className={cls.header}>

                    <Container className={cls.header__container}>
                        <div>
                            <h1 className={cls.header__title}>Создаем сайты и айдентику от всей <span>души</span> </h1>
                            <h3 className={cls.header__text}>Давайте обсудим и ваш проект</h3>
                        </div>
                        <div className={cls.header__rowblock__avatars}>
                            {
                                avatars.length > 0 && avatars.map((ava, index) =>
                                    <Avatar
                                        key={ava.id}
                                        src={ava.image}
                                        fullName={ava.fullName}
                                        job={ava.job}
                                        className={cls.header__ava}
                                    />
                                )
                            }
                        </div>



                    </Container>
                </div>
            </div>
            <div className={`${cls.header__btns} ${colorChanget ? cls.active__nav : ''}`}>
                <div>
                    <Container>
                        <Link href='/recomend-site'>
                            <a
                                style={(query === undefined) && !colorChanget ? { opacity: "1", color: 'black' } : {}}
                                className={(query === undefined) && colorChanget ? cls.active__link : ''}
                            >
                                <span><PlusIcon /></span>
                                Рекомендовать сайт
                            </a>
                        </Link>
                        <Link href='/order-project'>
                            <a
                                style={(query === 'portfolio') && !colorChanget ? { opacity: "1", color: 'black' } : {}}
                                className={(query === 'portfolio') && colorChanget ? cls.active__link : ''}
                            >
                                <span><PlusIcon /></span>
                                Заказать сайт
                            </a>
                        </Link>
                        {
                            token ?
                                <Link href='/create-article'>
                                    <a
                                        style={(query === 'articles') && !colorChanget ? { opacity: "1", color: 'black' } : {}}
                                        className={(query === 'articles') && colorChanget ? cls.active__link : ''}
                                    >
                                        <span><PlusIcon /></span>
                                        Добавить статью
                                    </a>
                                </Link> :
                                <Link href='/auth/register'>
                                    <a
                                        style={(query === 'articles') && !colorChanget ? { opacity: "1", color: 'black' } : {}}
                                        className={(query === 'articles') && colorChanget ? cls.active__link : ''}
                                    >
                                        <span><PlusIcon /></span>
                                        Добавить статью
                                    </a>
                                </Link>
                        }
                    </Container>
                </div>
                <div>
                    <Container>
                        <button
                            style={query === undefined ? { opacity: 1 } : {}}
                            onClick={() => router.push('', '?', { scroll: false })}
                        >
                            Популярные сайты
                        </button>
                        <button
                            style={query === 'portfolio' ? { opacity: 1 } : {}}
                            onClick={() => router.push('', '?cards=portfolio', { scroll: false })}
                        >
                            Наше портфолио
                        </button>
                        <button
                            style={query === 'articles' ? { opacity: 1 } : {}}
                            onClick={() => router.push('', '?cards=articles', { scroll: false })}
                        >
                            Статьи
                        </button>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default Header;
