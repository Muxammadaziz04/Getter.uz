import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Container from '../Container';
import NavLink from '../NavLink';
import { Logo } from '../icons';
import getElementSize from 'utils/getElementSize';
import cls from './Navbar.module.scss'
import TestButton from '../Buttons/TestButton';
import { getCookie } from 'cookies-next';

const Navbar = ({ links = [], whiteMode = false }) => {
    const [size, setSize] = useState({ width: 0, height: 0, x: 0, y: 0 })
    const router = useRouter()
    const token = getCookie('access_token_user')


    const func = () => {
        if (router.pathname === '/') setSize({ width: 0, height: 0, x: 0, y: 0 })
        const el = document.getElementById(links.find(link => link.link === router.pathname)?.id || links[0]?.id)
        setSize(el ? getElementSize(el) : { x: 0, y: 0 })
    }

    useEffect(() => {
        func()
    }, [router.pathname, links])

    return (
        <nav className={`${cls.nav} ${whiteMode ? cls.whiteMode : ''}`}>
            <Container className={cls.nav__container}>
                <div style={{ display: 'flex', gap: "20px" }}>
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
                                        label={link.label}
                                        whiteMode={whiteMode}
                                        id={link.id}
                                        onMouseOver={(el) => setSize(getElementSize(el.target))}
                                        onMouseLeave={func}
                                    >
                                        {typeof link.icon === 'function' && link.icon()}
                                        {link.label}
                                    </NavLink>
                                )
                            }
                            {size.x > 0 && <div
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
                    <TestButton />
                </div>

                <div className={cls.nav__btngroup}>
                    <NavLink href='/order-project' withBorder>Заказать проект</NavLink>
                    <NavLink href={token ? '/profile' : '/auth/register'} withBorder>{false ? "Войти" : "Профиль"}</NavLink>
                </div>
            </Container>
        </nav>
    );
}

export default Navbar;