import { useState } from 'react';
import Link from 'next/link';
import Container from '../Container';
import NavLink from '../NavLink';
import { Logo } from '../icons';
import cls from './Navbar.module.scss'

const Navbar = ({ links = [], whiteMode = false }) => {
    
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
                                <NavLink key={link.id} href={link.link}>
                                    {typeof link.icon === 'function' && link.icon()}
                                    {link.label}
                                </NavLink>
                            )
                        }
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