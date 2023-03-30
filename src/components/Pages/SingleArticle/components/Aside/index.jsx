import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { GetArticlesbyid } from 'services/articles';
import ArticleCard from '../ArticleCard';
import Profile from '../Profile';
import cls from './Aside.module.scss'

const Aside = () => {
    const router = useRouter()
    const [datas, setDatas] = useState()
    const { id } = router.query

    useEffect(() => {

        const ferchData = async () => {
            const data = await GetArticlesbyid(id);
            setDatas(data?.data)
        };

        ferchData()
            .then((err) => {
                console.log(err);
            })

    }, [router]);
    return (
        <div className={cls.aside}>
            <Profile data={datas?.user} />
            <p className={cls.aside__desc}>Anton Ptushkin Lead designer of Nope Studion in Ukraine</p>
            <span className={cls.aside__more}>Больше от {datas?.user?.name}</span>
            <div className={cls.aside__list}>
                <ArticleCard />
            </div>
        </div>
    );
}

export default Aside
