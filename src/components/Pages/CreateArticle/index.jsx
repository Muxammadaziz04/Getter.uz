import Container from 'components/UI/Container';
import { useEffect, useState } from 'react';
import { GetMe } from 'services/user';
import LeftAside from '../Profile/components/LeftAside';
import Navbar from '../Profile/components/Navbar';
import Content from './components/Content';
import cls from './CreateArticle.module.scss'

const CreateArticle = () => {
    const [data, setData] = useState()
    useEffect(() => {
        const fetchData = async () => {
            const user = await GetMe();
            setData(user)
        }
        fetchData()
            .then((err) => {
                console.log(err);
            })

    }, []);
    return (
        <div style={{ width: '100%', flexGrow: '1' }}>
            <Navbar user={data} />
            <div className={cls.page}>
                <Container>
                    <div className={cls.page__leftaside}>
                        <LeftAside />
                    </div>
                    <div className={cls.page__content}>
                        <Content />
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default CreateArticle;
