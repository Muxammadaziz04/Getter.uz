import ArticleCard from '../ArticleCard';
import Profile from '../Profile';
import cls from './Aside.module.scss'

const Aside = () => {
    return (
        <div className={cls.aside}>
            <Profile />
            <p className={cls.aside__desc}>Anton Ptushkin Lead designer of Nope Studion in Ukraine</p>
            <span className={cls.aside__more}>Больше от Anton</span>
            <div className={cls.aside__list}>
                <ArticleCard />
            </div>
        </div>
    );
}

export default Aside
