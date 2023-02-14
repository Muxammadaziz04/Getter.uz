import AnimatedBorder from 'components/UI/AnimatedBorder';
import AnimatedCircle from 'components/UI/AnimatedCircle';
import Container from 'components/UI/Container';
import Navbar from 'components/UI/Navbar';
import { navLinks } from './data';
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
                </Container>
            </AnimatedBorder>
            <AnimatedCircle />
        </div>
    );
}

export default Header;
