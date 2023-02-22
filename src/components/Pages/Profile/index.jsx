import Container from 'components/UI/Container';
import Content from './components/Content';
import { articles } from '../Articles/data';
import cls from './Profile.module.scss'
import LeftAside from './components/LeftAside';
import RightAside from './components/RightAside';
import Navbar from './components/Navbar';

const Profile = () => {
    return (
        <div style={{width: '100%'}}>
            <Navbar />
            <div className={cls.page}>
                <Container>
                    <div className={cls.page__leftaside}>
                        <LeftAside />
                    </div>
                    <div className={cls.page__content}>
                        <Content articles={articles} />
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
