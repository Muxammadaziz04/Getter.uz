import Container from 'components/UI/Container';
import Content from './components/Content';
import { articles } from '../Articles/data';
import cls from './Profile.module.scss'
import LeftAside from './components/LeftAside';
import RightAside from './components/RightAside';
import Navbar from './components/Navbar';
import { GetMe } from 'services/user';
import { useEffect, useState } from 'react';

const Profile = () => {
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
        <div style={{ width: '100%' }}>

            <Navbar user={data} />
            <div className={cls.page}>
                <Container>
                    <div className={cls.page__leftaside}>
                        <LeftAside />
                    </div>
                    <div className={cls.page__content}>
                        <Content articles={data} />
                    </div>
                    <div className={cls.page__rightaside}>
                        <RightAside />
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Profile;
