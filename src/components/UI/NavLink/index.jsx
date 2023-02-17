import Link from "next/link";
import cls from './NavLink.module.scss'

const NavLink = ({ children, href, label = '', active, withBorder, whiteMode = false, ...other }) => {
    return (
        <Link href={href}>
            <a
                className={`
                    ${cls.link} 
                    ${active ? cls.active : ''} 
                    ${withBorder ? cls.border : ''} 
                    ${label === 'menu' ? cls.menu : ''}
                    ${whiteMode && active ? cls.white : ""}`
                }
                {...other}
            >
                {children}
            </a>
        </Link>
    );
}

export default NavLink;
