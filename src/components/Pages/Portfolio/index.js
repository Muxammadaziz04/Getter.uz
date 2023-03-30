;

import Cards from './components/Cards';
import cls from './Main.module.scss'

const Portfolio = () => {
    return (
        <div className={cls.main}>
            <Cards />
        </div>
    );
}

export default Portfolio;