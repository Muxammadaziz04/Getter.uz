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

const Header = () => {
    const router = useRouter()
    const [colorChanget, setColorChanget] = useState(false)
    const query = router?.asPath.split('?')?.[1]?.split('=')?.[1]

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
                    <Navbar links={navLinks} />
                    <div>
                        <Container>
                            <h1 className={cls.header__title}>Создаем сайты и айдентику от всей <span>души</span> </h1>
                        </Container>
                    </div>
                    <AnimatedBorder className={cls.header__rowblock}>
                        <Container>
                            <h3 className={cls.header__rowblock__text}>Давайте обсудим и ваш проект</h3>
                            <div className={cls.header__rowblock__avatars}>
                                {
                                    avatars.length > 0 && avatars.map((ava, index) =>
                                        <Avatar
                                            key={ava.id}
                                            src={ava.image}
                                            fullName={ava.fullName}
                                            job={ava.job}
                                            style={{ transform: `translateX(-${index * 14}px)` }}
                                            className={cls.header__ava}
                                            onMouseEnter={(e) => e.target.closest('div').style = `transform: translateX(-${index * 14}px) scale(1.3);`}
                                            onMouseLeave={(e) => e.target.closest('div.ava').style = `transform: translateX(-${index * 14}px);`}
                                        />
                                    )
                                }
                            </div>
                            <div>
                                <RightArrow />
                            </div>
                        </Container>
                    </AnimatedBorder>
                    <AnimatedCircle />
                </div>
            </div>
            <div className={`${cls.header__btns} ${colorChanget ? cls.active__nav : ''}`}>
                <div>
                    <Container>
                        <Link href='/recomend-site'>
                            <a>
                                <span><PlusIcon /></span>
                                Рекомендовать сайт
                            </a>
                        </Link>
                        <Link href='/order'>
                            <a>
                                <span><PlusIcon /></span>
                                Заказать сайт
                            </a>
                        </Link>
                        <Link href='/create-article'>
                            <a>
                                <span><PlusIcon /></span>
                                Добавить статью
                            </a>
                        </Link>
                    </Container>
                </div>
                <div>
                    <Container>
                        <button
                            style={query === 'populated-sites' ? { opacity: 1 } : {}}
                            onClick={() => router.push('', '?cards=populated-sites', { scroll: false })}
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
