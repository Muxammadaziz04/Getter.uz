import CircleButton from 'components/UI/Buttons/CircleButton';
import Comment from 'components/UI/Comment';
import { LargeCommentIcon, LargiLikeIcon, ShareIcon } from 'components/UI/icons';
import { getCookie } from 'cookies-next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { GetArticlesbyid } from 'services/articles';
import { AddCamment } from 'services/comments';
import { GetMe } from 'services/user';
import Profile from '../Profile';
import cls from './Content.module.scss'

const Content = () => {
    const router = useRouter()
    const [datas, setDatas] = useState()
    const [comment, setComment] = useState()
    const [meUser, setMeUser] = useState()
    const [title, setTitle] = useState()
    const userId = getCookie('user_id')
    const { register, handleSubmit } = useForm();
    const { id } = router.query

    useEffect(() => {
        const ferchData = async () => {
            const data = await GetArticlesbyid(id);
            setDatas(data?.data)
            setComment(data?.data?.comments.reverse())
        };
        const GetMeUser = async () => {
            const data = await GetMe()
            setMeUser(data)
        }
        (async () => {
            await ferchData()
            await GetMeUser()
        })()

    }, [router]);


    const addComments = async (data) => {

        if (userId) {
            setComment(state => [{ user: meUser, text: data?.text }, ...state])

            await AddCamment({ user: userId, article: datas?.id, ...data })
            setTitle('')
        } else {
            alert('please login')
        }


    }

    if (datas) {
        console.log(datas)
        return (
            <div className={cls.content}>
                <div className={cls.content__btns}>
                    <CircleButton>
                        <LargiLikeIcon />
                    </CircleButton>
                    <CircleButton>
                        <LargeCommentIcon />
                    </CircleButton>
                    <CircleButton>
                        <ShareIcon />
                    </CircleButton>
                </div>
                <div className={cls.content__wrapper}>
                    <h2 className={cls.content__title}>{datas?.title}</h2>
                    <div className={cls.content__date}>
                        <span>January 25, 2023</span>
                        <span>6 minutes</span>
                    </div>
                    <Profile
                        data={datas?.user}
                    />
                    <div className={cls.content__img}>
                        <Image
                            src={datas?.avatar?.url}
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                    <div className={cls.content__text}>
                        <p>{datas?.description}</p>
                    </div>
                    <div className={cls.content__input}>
                        <Profile data={datas?.user} />
                        <label>
                            <input type="text" value={title} placeholder='Оставте свои комментари'   {...register("text", {
                                required: true,
                            })} onChange={(e) => setTitle(e.target.value)} />
                            <button onClick={handleSubmit(addComments)}>Отправить</button>
                        </label>
                    </div>
                    <div className={cls.content__comments}>
                        <span>Комментарии</span>
                        <div className={cls.content__comments__list}>
                            <Comment data={comment} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <h1>loading</h1>
        )
    }
}

export default Content;