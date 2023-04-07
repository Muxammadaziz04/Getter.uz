import AnimatedBorder from 'components/UI/AnimatedBorder';
import RoundedButton from 'components/UI/Buttons/RoundedButton';
import Container from 'components/UI/Container';
import Input from 'components/UI/Form/Input';
import PhotoUpload from 'components/UI/Form/PhotoUpload';
import { NextArrowIcon, RightArrow } from 'components/UI/icons';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from 'services/register';
import cls from './Content.module.scss'
import { getCookie, setCookie } from 'cookies-next';
const Content = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const router = useRouter();
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()

    const handelRegistor = async () => {
        const res = await loginUser({ password: password, email: email })
        if (res.status == 200) {
            setCookie("accessToken", res.data.accessToken)
            setCookie("user_id", res.data.userId)
            setCookie("refreshToken", res.data.refreshToken)
            alert("login seccesfull")
            router.push('/')
        } else {
            alert('failed')
        }
    };
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
                            <Input onChange={(e) => setEmail(e.target.value)} placeholder='example@gmail.com' type='email' />
                            <Input onChange={(e) => setPassword(e.target.value)} placeholder='Пароль' type='password' />
                        </div>
                    </div>
                </div>
                <AnimatedBorder>
                    <div className={cls.content__line}>
                        <span>Войти</span>
                        <button onClick={handleSubmit(handelRegistor)}><RightArrow /></button>
                    </div>
                </AnimatedBorder>
            </Container>
        </div>
    );
}

export default Content;
