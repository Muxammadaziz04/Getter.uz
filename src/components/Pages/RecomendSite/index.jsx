import BlackButton from 'components/UI/Buttons/BlackButton';
import Container from 'components/UI/Container';
import DashedInput from 'components/UI/Form/DashedInput';
import VioleteInput from 'components/UI/Form/VioleteInput';
import { LinkIcon, PhoneIcon, UserIcon } from 'components/UI/icons';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createWebSite } from 'services/webSites';
import cls from './RecomendSite.module.scss'

const RecomendSite = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false)
    const [link, setLink] = useState()
    const [name, setName] = useState()
    const [creator, setCreator] = useState()
    const router = useRouter()
    const HandleAddWebsite = async () => {
        setLoading(true)
        await createWebSite({ title: name, creator: creator, link: link })

            .then((response) => {
                setLoading(false)
                alert('sended')
                router.push('/')
            })
            .catch(error => {
                setLoading(false)
                alert(error.message)

            })



    }

    if (loading) {
        return (
            <h1>loading</h1>
        )
    }
    else {

        return (
            <div className={cls.page}>
                <Container>
                    <h2 className={cls.page__title}>Вы можете связаться с нами в любое время</h2>
                    <form className={cls.page__form} onSubmit={handleSubmit(HandleAddWebsite)}>
                        <div>
                            <VioleteInput
                                placeholder='Ссылка на ваш сайт'
                                Icon={<LinkIcon />}
                                onChange={(e) => setLink(e.target.value)}
                            />
                            <label></label>
                        </div>
                        <div>
                            <DashedInput
                                placeholder='Ваше имя'
                                Icon={<UserIcon />}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <DashedInput
                                placeholder='Ваш номер'
                                Icon={<PhoneIcon />}
                                onChange={(e) => setCreator(e.target.value)}
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
}

export default RecomendSite;