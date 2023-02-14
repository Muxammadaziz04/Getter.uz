import Footer from "components/UI/Footer";
import Navbar from "components/UI/Navbar";
import { useRouter } from "next/router";
import { navLinks } from "./data";

const MainLayout = ({children}) => {
    const router = useRouter()
    return (
        <div>
            {router.pathname !== '/' && <Navbar links={navLinks}/>}
            {children}
            <Footer />
        </div>
    );
}

export default MainLayout;
