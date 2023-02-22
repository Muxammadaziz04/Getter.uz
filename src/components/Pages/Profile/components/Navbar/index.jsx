import CircleButton from 'components/UI/Buttons/CircleButton';
import Container from 'components/UI/Container';
import { Logo, MessageIcon } from 'components/UI/icons';
import Image from 'next/image';
import cls from './Navbar.module.scss'

const Navbar = () => {
    return (
        <div className={cls.navbar}>
            <Container>
                <div className={cls.navbar__logo}>
                    <Logo />
                </div>
                <div className={cls.navbar__profile}>
                    <div className={cls.navbar__profile__img}>
                        <Image 
                            src='/avatars/abbos_janizakov.png'
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                    <div className={cls.navbar__profile__info}>
                        <h3>Bekzod Eshmatov</h3>
                        <span>WebDesigner</span>
                    </div>
                </div>
                <CircleButton>
                    <MessageIcon />
                </CircleButton>
            </Container>
        </div>
    );
}

export default Navbar;
