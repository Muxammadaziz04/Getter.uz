import Container from 'components/UI/Container';
import Sidebar from 'components/UI/Sidebar';
import Aside from './components/Aside';
import Content from './components/Content';
import { sidebarBtns } from '../Articles/data';
import cls from './SingleArticle.module.scss';
import { useEffect, useState } from 'react';
import { GetArticles } from 'services/articles';
import { GetCategory } from 'services/categories';

const SingleArticle = ({ }) => {

    const [category, setCategory] = useState([])
    useEffect(() => {

        const ferchCategory = async () => {
            const data = await GetCategory();

            setCategory(data.items)
        }

        ferchCategory()
            .then((err) => {
                console.log(err);
            })

    }, []);

    return (
        <div className={cls.page}>
            <Container>
                <div className={cls.page__leftaside}>
                    <Sidebar buttons={category} />
                </div>
                <div className={cls.page__content}>
                    <Content />
                </div>
                <div className={cls.page__rightaside}>
                    <Aside />
                </div>
            </Container>
        </div>
    );
}

export default SingleArticle;
