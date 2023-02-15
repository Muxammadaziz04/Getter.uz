import Link from "next/link";
import cls from './NavLink.module.scss'

const NavLink = ({ children, href, active, withBorder, whiteMode = false, ...other }) => {
    return (
        <Link href={href}>
            <a
                className={`
                    ${cls.link} 
                    ${active ? cls.active : ''} 
                    ${withBorder ? cls.border : ''} 
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
