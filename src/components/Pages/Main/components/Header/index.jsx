import AnimatedBorder from 'components/UI/AnimatedBorder';
import AnimatedCircle from 'components/UI/AnimatedCircle';
import Avatar from 'components/UI/Avatar';
import Container from 'components/UI/Container';
import { PlusIcon, RightArrow } from 'components/UI/icons';
import Navbar from 'components/UI/Navbar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { navLinks } from '../../../../Layouts/Main/data';
import { avatars } from './data';
import cls from './Header.module.scss'

const Header = () => {
    const router = useRouter()
    return (
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
                                    style={{ transform: `translateX(-${index * 14}px)` }}
                                    className={cls.header__ava}
                                />
                            )
                        }
                    </div>
                    <div>
                        <RightArrow />
                    </div>
                </Container>
            </AnimatedBorder>
            <div className={cls.header__btns}>
                <div>
                    <Container>
                        <Link href=''>
                            <a>
                                <span><PlusIcon /></span>
                                Рекомендовать сайт
                            </a>
                        </Link>
                        <Link href=''>
                            <a>
                                <span><PlusIcon /></span>
                                Заказать сайт
                            </a>
                        </Link>
                        <Link href=''>
                            <a>
                                <span><PlusIcon /></span>
                                Добавить статью
                            </a>
                        </Link>
                    </Container>
                </div>
                <div>
                    <Container>
                        <button onClick={() => router.push('', '?cards=population-sites', {scroll: false})}><a>Популярные сайты</a></button>
                        <button onClick={() => router.push('', '?cards=portfolio', {scroll: false})}><a>Наше портфолио</a></button>
                        <button onClick={() => router.push('', '?cards=articles', {scroll: false})}><a>Статьи</a></button>
                    </Container>
                </div>
            </div>
            <AnimatedCircle />
        </div>
    );
}

export default Header;
