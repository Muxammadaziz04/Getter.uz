import CircleButton from 'components/UI/Buttons/CircleButton';
import Container from 'components/UI/Container';
import { Logo, MessageIcon } from 'components/UI/icons';
import Image from 'next/image';
import Link from 'next/link';
import cls from './Navbar.module.scss'

const Navbar = ({ user }) => {

    if (user) {
        return (
            <div className={cls.navbar}>
                <Container>
                    <div className={cls.navbar__logo}>
                        <Link href='/'>
                            <a>
                                <Logo />
                            </a>
                        </Link>
                    </div>
                    <div className={cls.navbar__profile}>
                        <div className={cls.navbar__profile__img}>
                            <Image
                                src={user?.avatar?.url}
                                layout='fill'
                                objectFit='cover'
                            />
                        </div>
                        <div className={cls.navbar__profile__info}>
                            <h3>{user?.name}</h3>
                            <span>{user?.position?.title}</span>
                        </div>
                    </div>
                    <CircleButton>
                        <MessageIcon />
                    </CircleButton>
                </Container>
            </div>
        );
    }

}

export default Navbar;
