import Sidebar from '../../UI/Sidebar';
import Container from 'components/UI/Container';
import Content from './components/Content';
import cls from './Articles.module.scss'
import { useEffect, useState } from 'react';
import { GetArticles, GetArticlesbycategoryId } from 'services/articles';
import { GetCategory, GetCategorybyid } from 'services/categories';
import { useRouter } from 'next/router';

const Articles = () => {
    const [data, setData] = useState([])
    const [category, setCategory] = useState([])
    const router = useRouter()
    const { id } = router.query
    console.log(id)

    useEffect(() => {
        const fetchData = async () => {
            const data = await GetArticles();
            setData(data?.items)
        }
        const ferchCategory = async () => {
            const data = await GetCategory();
            setCategory(data?.items)
        }
        fetchData()
        ferchCategory()


    }, []);
    if (id) {
        useEffect(() => {
            const ferchCategoryArticlu = async () => {
                const data = await GetArticlesbycategoryId(id);
                console.log(data)
                setData(data)
            };
            ferchCategoryArticlu()
        }, [id]);
    }


    return (
        <div className={cls.page}>
            <Container>
                <div className={cls.page__sidebar}>
                    <Sidebar buttons={category} />
                </div>
                <div className={cls.page__content}>
                    <Content articles={data} />
                </div>
            </Container>
        </div>
    );
}

export default Articles;
