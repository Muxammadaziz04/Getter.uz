import Footer from "components/UI/Footer";
import Navbar from "components/UI/Navbar";
import { useRouter } from "next/router";
import { navLinks, footerLinks, contacts } from "./data";
import cls from './Main.module.scss'

const allowNav = [
    '/profile',
    '/create-article',
    '/auth/login',
    '/auth/register'
]

const allowFooter = [
    '/auth/login',
    '/auth/register'
]

const MainLayout = ({ children }) => {
    const router = useRouter()

    return (
        <div className={cls.main}>
            {!allowNav.includes(router.pathname) && <Navbar links={navLinks} whiteMode={true} />}
            <div className={cls.main__content}>
                {children}
            </div>
            {!allowFooter.includes(router.pathname) && <Footer links={footerLinks} contacts={contacts} />}
        </div>
    );
}

export default MainLayout;
