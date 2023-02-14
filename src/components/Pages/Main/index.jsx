import AnimatedCircle from 'components/UI/AnimatedCircle';
import Header from './components/Header';
import cls from './Main.module.scss'

const MainPage = () => {
    return (
        <div className={cls.main}>
            <Header />
        </div>
    );
}

export default MainPage;
