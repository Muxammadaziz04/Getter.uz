import AnimatedBorder from 'components/UI/AnimatedBorder';
import AnimatedCircle from 'components/UI/AnimatedCircle';
import Avatar from 'components/UI/Avatar';
import Container from 'components/UI/Container';
import Navbar from 'components/UI/Navbar';
import Tooltip from 'components/UI/Tooltip';
import { navLinks } from '../../../../Layouts/Main/data';
import cls from './Header.module.scss'

const Header = () => {
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
                        <Tooltip>
                            <Avatar
                                src='/abdulloh.png'
                                style={{ transform: `translateX(-${0 * 14}px)` }}
                                className={cls.header__ava}
                            />
                        </Tooltip>
                        <Tooltip>
                            <Avatar
                                src='/abdulloh.png'
                                style={{ transform: `translateX(-${1 * 14}px)` }}
                                className={cls.header__ava}
                            />
                        </Tooltip>
                        <Avatar
                            src='/abdulloh.png'
                            style={{ transform: `translateX(-${2 * 14}px)` }}
                            className={cls.header__ava}
                        />
                    </div>
                </Container>
            </AnimatedBorder>
            <AnimatedCircle />
        </div>
    );
}

export default Header;
