import Cards from './components/Cards';
import Header from './components/Header';
import cls from './Main.module.scss'

const Main = () => {
    return (
        <div className={cls.main}>
            <Header />
            <Cards />
        </div>
    );
}

export default Main;
