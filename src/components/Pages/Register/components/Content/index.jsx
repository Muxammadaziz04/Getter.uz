import AnimatedBorder from 'components/UI/AnimatedBorder';
import RoundedButton from 'components/UI/Buttons/RoundedButton';
import Container from 'components/UI/Container';
import Input from 'components/UI/Form/Input';
import PhotoUpload from 'components/UI/Form/PhotoUpload';
import { RightArrow } from 'components/UI/icons';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { GetPosition } from 'services/position';
import { RegisterUser } from 'services/register';
import cls from './Content.module.scss'

const Content = () => {
    const router = useRouter()

    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [position, setPosition] = useState()
    const [file, setFile] = useState()
    const [dataPositon, setDataPositon] = useState([])
    const [phone, setPhone] = useState()
    const [positionInput, setPositioninput] = useState()
    const handelRegistor = async () => {
        const formData = new FormData()
        formData.append("name", name)
        formData.append("password", password)
        formData.append("email", email)
        formData.append("description", "hello")
        formData.append("position", position)
        formData.append("file", file)
        formData.append("phone", phone)
        const res = await RegisterUser(formData)

        if (res.status == 201) {
            alert("resitor seccesfull, Please canfig email")
            router.push('/auth/login')
        } else {
            alert('failed')
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            const data = await GetPosition();
            setDataPositon(data?.items)
        }
        fetchData()
            .then((err) => {
                console.log(err);
            })

    }, []);


    const hendleimg = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }

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
                    <PhotoUpload onChange={hendleimg} />

                    <div className={cls.content__form__inputs}>
                        <div>
                            <Input placeholder='ФИО' onChange={(e) => setName(e.target.value)} />
                            <Input placeholder='' withData={true} onChange={(elem, positionId) => {
                                setPosition(positionId)
                            }} data={dataPositon} />
                        </div>
                        <div>
                            <Input placeholder='example@gmail.com' type='email' onChange={(e) => setEmail(e.target.value)} />
                            <Input placeholder='Пароль' type='password' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div>
                            <Input placeholder='+998 (_ _) _ _ _    _ _    _ _' type='number' onChange={(e) => setPhone(e.target.value)} />
                        </div>
                    </div>
                </div>
                <AnimatedBorder>
                    <div className={cls.content__line}>
                        <span>Зарегистрироваться</span>
                        <button onClick={handleSubmit(handelRegistor)}><RightArrow /></button>
                    </div>
                </AnimatedBorder>
            </Container>
        </div>
    );
}

export default Content;
