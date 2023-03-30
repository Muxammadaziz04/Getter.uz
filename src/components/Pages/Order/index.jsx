import BlackButton from 'components/UI/Buttons/BlackButton';
import Container from 'components/UI/Container';
import DashedInput from 'components/UI/Form/DashedInput';
import DashedInputMask from 'components/UI/Form/DashedInputMask';
import VioleteInput from 'components/UI/Form/VioleteInput';
import { HomeIcon, PhoneIcon, UploadIcon, UserIcon } from 'components/UI/icons';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createOrder } from 'services/order';
import cls from './Order.module.scss'

const Order = () => {
    const [loading, setLoading] = useState(false)
    const [company, setCompany] = useState()
    const [file, setFile] = useState()
    const [name, setName] = useState()
    const [phone, setPhone] = useState()

    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const router = useRouter()

    const HandleAddPortfolio = async () => {
        setLoading(true)
        const formData = new FormData()
        formData.append("file", file)
        formData.append("name", name)
        formData.append("company", company)
        formData.append("phone", phone)

        await createOrder(formData)
            .then((response) => {
                setLoading(false)
                alert("sended mesege")
                router.push('/')
            })
            .catch(error => {
                setLoading(false)
                alert(error.message)
            })
    }

    const hendleFile = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }
    if (loading) {
        return (
            <h1>loading</h1>
        )
    } else {
        return (
            <div className={cls.page}>
                <Container>
                    <h2 className={cls.page__title}>Вы можете связаться с нами в любое время</h2>
                    <form className={cls.page__form} onSubmit={handleSubmit(HandleAddPortfolio)}>
                        <div>
                            <VioleteInput
                                placeholder='Название компании'
                                Icon={<HomeIcon />}
                                onChange={(e) => setCompany(e.target.value)}
                            />
                            <DashedInput
                                type='file'
                                placeholder='Загрузить бриф'
                                Icon={<UploadIcon />}
                                onChange={hendleFile}
                            />
                        </div>
                        <div>
                            <DashedInput
                                placeholder='Ваше имя'
                                Icon={<UserIcon />}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <DashedInputMask
                                type='number'
                                placeholder='Ваш номер'
                                Icon={<PhoneIcon />}
                                mask='+\9\9\8 (99) 999-99-99'
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <BlackButton >Отправить</BlackButton>
                    </form>
                    {/* <div className={cls.page__button}>
                    <span>Нужен редизайн?</span>
                    <button>Редизайн</button>
                </div> */}
                </Container>
            </div>
        );
    }
}

export default Order;
