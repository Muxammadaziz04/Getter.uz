import cls from './Card.module.scss'

const Card = () => {
    return (
        <div className={cls.card}>
            <div>
                <h4>Разработка Дизайнов</h4>
                <p>— Веб-сайты, Мобильные приложения, Системы, Баннера, айденитика, логотип</p>
            </div>
        </div>
    );
}

export default Card;
