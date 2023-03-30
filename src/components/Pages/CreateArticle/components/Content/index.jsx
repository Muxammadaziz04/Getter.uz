import dynamic from 'next/dynamic';
import { articles } from 'components/Pages/Articles/data';
import BlackBorderButton from 'components/UI/Buttons/BlackBorderButton';
import DataInput from 'components/UI/Form/DataInput';
import TextArea from 'components/UI/Form/TextArea';
import { EditIcon } from 'components/UI/icons';
import cls from './Content.module.scss'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { GetCategory } from 'services/categories';
import { useForm } from 'react-hook-form';
import { getCookie } from 'cookies-next';
import { createArticles } from 'services/articles';
import { useRouter } from 'next/router';

const RichText = dynamic(() => import('components/UI/Form/RichText'), { ssr: false });

const Content = () => {
    const [loading, setloading] = useState(false)
    const [imgFile, setImgFile] = useState()
    const [tag, setTag] = useState([])
    const [tagtext, setTagtext] = useState()
    const [title, setTitle] = useState()
    const [disc, setDisc] = useState()
    const [category, setCAtegory] = useState([])
    const [categoriesId, setCategoryId] = useState(0)
    const cooks = getCookie('user_id')
    const { handleSubmit } = useForm();

    const router = useRouter()
    const hendleArticli = async () => {
        const formData = new FormData()
        formData.append("file", imgFile)
        formData.append("title", title)
        formData.append("description", disc)
        if (tag.length) {
            formData.append("tags", JSON.stringify(tag))
        } else {
            formData.append("tags", JSON.stringify([tagtext]))
        }
        formData.append("category", categoriesId)
        formData.append("user", cooks)

        setloading(true)
        await createArticles(formData)
            .then((response) => {
                if (response.status == 200 || response.status == 201) {
                    setloading(false)
                    alert("item creates")
                    router.push('/profile')
                } else {
                    setloading(false)
                    alert("failed ")
                }
                if (response?.response) {
                    if (response.response.status == 401) {
                        removeCookie('access_token_user')
                    }
                }
            })
            .catch(error => {
                setloading(false)
                alert(error.message)
            })
    }

    useEffect(() => {
        const fetcCategory = async () => {
            const data = await GetCategory();
            setCAtegory(data?.items)

        }

        fetcCategory()
            .then((err) => {
                console.log("err");
            })
    }, []);

    const hendleimg = (e) => {
        if (e.target.files[0]) {
            setImgFile(e.target.files[0])
        }
    }

    return (
        <div className={cls.content}>
            <div className={cls.content__btns}>
                <button><EditIcon />Изменить</button>
                <button>Предпросмотр</button>
            </div>
            <div className={cls.content__form}>
                <div className={cls.content__form__elements}>
                    <div className={cls.content__form__inputs}>
                        {category ? <select className={cls.content__form__inputselect} name="id" id="cars" onChange={(e) => setCategoryId(e.target.value)}>
                            <option selected disabled value={categoriesId}>Выберите категории</option>
                            {category?.map((e) => (
                                <option key={e?.id} value={e?.id} >{e?.title}</option>
                            ))}
                        </select> : ""}

                        <DataInput placeholder='# Добавить хэштег' data={tag} value={tagtext} onChange={(e) => {
                            console.log(e.target.value.length)
                            if (e.target.value.length == 1 && e.target.value !== "#") {
                                setTagtext("#" + e.target.value)
                            } else {
                                setTagtext(e.target.value)
                            }
                        }}
                            onKeyDown={(e) => {

                                if (e.keyCode === 13) {
                                    setTag([...tag, e.target.value])
                                    e.target.value = ""
                                    setTagtext('')
                                }
                            }} />
                    </div>
                    <div>
                        <TextArea onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <RichText onModelChange={(e) => setDisc(e)} />
                    </div>
                </div>
                <div className={cls.content__form__img}>
                    <label>
                        <input style={{ "display": "none" }} type={"file"} onChange={hendleimg} accept='image/*' />
                        <Image src={imgFile ? URL.createObjectURL(imgFile) : ""} alt="" width={254} height={179} />
                        <Image src={""} alt="" width={60} />
                    </label>
                </div>
            </div>
            <BlackBorderButton onClick={handleSubmit(hendleArticli)}>Опубликовать </BlackBorderButton>
        </div>
    );
}

export default Content;