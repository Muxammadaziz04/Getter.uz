import Container from 'components/UI/Container';
import { Logo } from 'components/UI/icons';
import Link from 'next/link';
import cls from './Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={cls.nav}>
            <Container>
                <Link href='/'>
                    <a >
                        <Logo />
                    </a>
                </Link>
            </Container>
        </nav>
    );
}

export default Navbar;
