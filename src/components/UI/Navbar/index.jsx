import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Container from '../Container';
import NavLink from '../NavLink';
import { Logo } from '../icons';
import getElementSize from 'utils/getElementSize';
import cls from './Navbar.module.scss'

const Navbar = ({ links = [], whiteMode = false }) => {
    const [size, setSize] = useState({width: 0, height: 0, x: 0, y: 0})
    const router = useRouter()

    useEffect(() => {
        const el = document.getElementById(links.find(link => link.link === router.pathname)?.id)
        setSize(getElementSize(el))
    }, [router.pathname, links])

    return (
        <nav className={`${cls.nav} ${whiteMode ? cls.whiteMode : ''}`}>
            <Container className={cls.nav__container}>
                <div className={cls.nav__group}>
                    <Link href='/'>
                        <a className={cls.nav__logo}>
                            <Logo />
                        </a>
                    </Link>
                    <div className={cls.nav__linkgroup}>
                        {
                            links?.length > 0 && links.map(link =>
                                <NavLink
                                    key={link.id}
                                    href={link.link}
                                    active={link.active}
                                    whiteMode={whiteMode}
                                    id={link.id}
                                >
                                    {typeof link.icon === 'function' && link.icon()}
                                    {link.label}
                                </NavLink>
                            )
                        }
                        {size.x && <div 
                            className={cls.link__active} 
                            style={{
                                width: size.width, 
                                height: size.height,
                                top: size.y,
                                left: size.x
                            }} 
                        />}
                    </div>
                </div>
                <div className={cls.nav__btngroup}>
                    <NavLink href='/order-project' withBorder>Заказать проект</NavLink>
                    <NavLink href='/profile' withBorder>Профиль</NavLink>
                </div>
            </Container>
        </nav>
    );
}

export default Navbar;