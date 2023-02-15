import Cards from './components/Cards';
import Header from './components/Header';
import cls from './Main.module.scss'

const MainPage = () => {
    return (
        <div className={cls.main}>
            <Header />
            <Cards />
        </div>
    );
}

export default MainPage;
