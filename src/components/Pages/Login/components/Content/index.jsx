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
import toast, { Toaster } from 'react-hot-toast';
import Loader from 'components/UI/loader/Loader';

const Content = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const router = useRouter();
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [loader, setLoader] = useState(false)
    const handelRegistor = async () => {
        setLoader(true)
        await loginUser({ password: password, email: email })
            .then(res => {
                if (res.status == 200) {
                    setLoader(false)
                    setCookie("accessToken", res.data.accessToken)
                    setCookie("user_id", res.data.userId)
                    setCookie("refreshToken", res.data.refreshToken)
                    toast("login seccesfull")
                    router.push('/profile')
                } else {
                    if (res?.response) {
                        setLoader(false)
                        toast(res.response.data.message)
                    }
                    else {
                        setLoader(false)
                        toast('failed')
                    }
                }
            })
            .catch(err => {
                setLoader(false)
                toast(err.message)
            })

    };
    return (
        <>
            {
                loader ? <Loader /> : ""
            }
            <div className={cls.content}>
                <Container>
                    <div className={cls.content__title}>
                        <h3>Войти</h3>
                        <div>
                            <span>Нет аккаунта?</span>
                            <RoundedButton onClick={() => router.push('/auth/register')}>Зарегистрироваться</RoundedButton>

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
                    <Toaster />
                    <AnimatedBorder>
                        <button className={cls.content__line}>
                            <span>Войти</span>
                            <div onClick={handleSubmit(handelRegistor)}><RightArrow /></div>
                        </button>
                    </AnimatedBorder>
                </Container>
            </div>
        </>
    );
}

export default Content;
