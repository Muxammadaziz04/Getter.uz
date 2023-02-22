import Container from 'components/UI/Container';
import { BlackFacebookIcon, BlackInstagramIcon, BlackTelegramIcon, BlackTwitterIcon } from 'components/UI/icons';
import Image from 'next/image';
import cls from './Contacts.module.scss'

const Contacts = () => {
    return (
        <div className={cls.page}>
            <Container>
                <div className={cls.page__info}>
                    <h2 className={cls.page__title}>Если у вас <br /> возникли вопросы <span>дайте знать</span></h2>
                    <div className={cls.page__contacts}>
                        <div className={cls.page__contacts__item}>
                            <span>Адрес:</span>
                            <a href='https://goo.gl/maps/yqizd4nrvc8gbbft6' target="_blank" rel="noreferrer">Buyuk Ipakyoli, ул Лутфи, 1-b дом, 49 кв</a>
                        </div>
                        <div className={cls.page__contacts__item}>
                            <span>Номер:</span>
                            <a href='tel:+998951224472' >+998 95 122-44-72</a>
                        </div>
                        <div className={cls.page__contacts__item}>
                            <span>E-mail:</span>
                            <a href='mailto:hello@getter.uz'>hello@getter.uz</a>
                        </div>
                    </div>
                    <div className={cls.page__links}>
                        <span>Социальные сети:</span>
                        <div>
                            <a href="https://getter.uz" target="_blank" rel="noreferrer">
                                <BlackInstagramIcon />
                            </a>
                            <a href="https://getter.uz" target="_blank" rel="noreferrer">
                                <BlackFacebookIcon />
                            </a>
                            <a href="https://getter.uz" target="_blank" rel="noreferrer">
                                <BlackTwitterIcon />
                            </a>
                            <a href="https://getter.uz">
                                <BlackTelegramIcon />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={cls.page__img}>
                    <Image 
                        src='/call.png'
                        layout='fill'
                        objectFit='cover'
                        alt='phone image'
                    />
                </div>
                <div></div>
            </Container>
        </div>
    );
}

export default Contacts;
