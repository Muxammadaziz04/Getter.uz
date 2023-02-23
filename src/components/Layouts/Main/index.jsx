import Footer from "components/UI/Footer";
import Navbar from "components/UI/Navbar";
import { useRouter } from "next/router";
import { navLinks, footerLinks, contacts } from "./data";
import cls from './Main.module.scss'

const arr = [
    '/',
    '/profile',
    '/create-article'
]

const MainLayout = ({children}) => {
    const router = useRouter()
    
    return (
        <div className={cls.main}>
            {!arr.includes(router.pathname) && <Navbar links={navLinks} whiteMode={true}/>}
            <div className={cls.main__content}>
                {children}
            </div>
            <Footer links={footerLinks} contacts={contacts} />
        </div>
    );
}

export default MainLayout;
