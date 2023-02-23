import AnimatedBorder from 'components/UI/AnimatedBorder';
import RoundedButton from 'components/UI/Buttons/RoundedButton';
import Container from 'components/UI/Container';
import Input from 'components/UI/Form/Input';
import PhotoUpload from 'components/UI/Form/PhotoUpload';
import { NextArrowIcon, RightArrow } from 'components/UI/icons';
import cls from './Content.module.scss'

const Content = () => {
    return (
        <div className={cls.content}>
            <Container>
                <div className={cls.content__title}>
                    <h3>Войти</h3>
                    <div>
                        <span>Нет аккаунта?</span>
                        <RoundedButton>Зарегистрироваться</RoundedButton>
                    </div>
                </div>
                <div className={cls.content__form}>
                    <div className={cls.content__form__inputs}>
                        <div>
                            <Input placeholder='example@gmail.com' type='email' />
                            <Input placeholder='Пароль' type='password' />
                        </div>
                    </div>
                </div>
                <AnimatedBorder>
                    <div className={cls.content__line}>
                        <span>Войти</span>
                        <button><RightArrow /></button>
                    </div>
                </AnimatedBorder>
            </Container>
        </div>
    );
}

export default Content;
