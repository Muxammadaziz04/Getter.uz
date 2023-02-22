import BlackButton from 'components/UI/Buttons/BlackButton';
import Container from 'components/UI/Container';
import DashedInput from 'components/UI/Form/DashedInput';
import VioleteInput from 'components/UI/Form/VioleteInput';
import { LinkIcon, PhoneIcon, UserIcon } from 'components/UI/icons';
import cls from './RecomendSite.module.scss'

const RecomendSite = () => {
    return (
        <div className={cls.page}>
            <Container>
                <h2 className={cls.page__title}>Вы можете связаться с нами в любое время</h2>
                <form className={cls.page__form}>
                    <div>
                        <VioleteInput
                            placeholder='Ссылка на ваш сайт'
                            Icon={<LinkIcon />}
                        />
                        <label></label>
                    </div>
                    <div>
                        <DashedInput
                            placeholder='Ваше имя'
                            Icon={<UserIcon />}
                        />
                        <DashedInput
                            placeholder='Ваш номер'
                            Icon={<PhoneIcon />}
                        />
                    </div>
                    <BlackButton>Отправить</BlackButton>
                </form>
                <div className={cls.page__button}>
                    <span>Нужен полноценный ИТ продукт?</span>
                    <button>ИТ продукт</button>
                </div>
            </Container>
        </div>
    );
}

export default RecomendSite;