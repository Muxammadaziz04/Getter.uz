import BlackButton from 'components/UI/Buttons/BlackButton';
import Container from 'components/UI/Container';
import DashedInput from 'components/UI/Form/DashedInput';
import VioleteInput from 'components/UI/Form/VioleteInput';
import { HomeIcon, PhoneIcon, UploadIcon, UserIcon } from 'components/UI/icons';
import cls from './Order.module.scss'

const Order = () => {
    return (
        <div className={cls.page}>
            <Container>
                <h2 className={cls.page__title}>Вы можете связаться с нами в любое время</h2>
                <form className={cls.page__form}>
                    <div>
                        <VioleteInput
                            placeholder='Название компании'
                            Icon={<HomeIcon />}
                        />
                        <DashedInput
                            type='file'
                            placeholder='Загрузить бриф'
                            Icon={<UploadIcon />}
                        />
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
                    <span>Нужен редизайн?</span>
                    <button>Редизайн</button>
                </div>
            </Container>
        </div>
    );
}

export default Order;
