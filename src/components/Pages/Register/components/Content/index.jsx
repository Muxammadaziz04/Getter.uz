import AnimatedBorder from 'components/UI/AnimatedBorder';
import RoundedButton from 'components/UI/Buttons/RoundedButton';
import Container from 'components/UI/Container';
import Input from 'components/UI/Form/Input';
import PhotoUpload from 'components/UI/Form/PhotoUpload';
import { RightArrow } from 'components/UI/icons';
import { useRouter } from 'next/router';
import cls from './Content.module.scss'

const Content = () => {
    const router = useRouter()
    return (
        <div className={cls.content}>
            <Container>
                <div className={cls.content__title}>
                    <h3>Зарегистрироваться</h3>
                    <div>
                        <span>Есть аккаунт?</span>
                        <RoundedButton onClick={() => router.push('/auth/login')}>Войти</RoundedButton>
                    </div>
                </div>
                <div className={cls.content__form}>
                    <PhotoUpload />
                    <div className={cls.content__form__inputs}>
                        <div>
                            <Input placeholder='ФИО' />
                            <Input placeholder='' withData={true} data={['#Ux designer', '#Ux Strategy', '#Ux Analys']} />
                        </div>
                        <div>
                            <Input placeholder='example@gmail.com' type='email' />
                            <Input placeholder='Пароль' type='password' />
                        </div>
                        <div>
                            <Input placeholder='+998 (_ _) _ _ _    _ _    _ _' type='number' />
                        </div>
                    </div>
                </div>
                <AnimatedBorder>
                    <div className={cls.content__line}>
                        <span>Зарегистрироваться</span>
                        <button><RightArrow /></button>
                    </div>
                </AnimatedBorder>
            </Container>
        </div>
    );
}

export default Content;
