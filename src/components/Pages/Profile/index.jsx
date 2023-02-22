import Container from 'components/UI/Container';
import Content from './components/Content';
import { articles } from '../Articles/data';
import cls from './Profile.module.scss'

const Profile = () => {
    return (
        <div className={cls.page}>
            <Container>
                <div className={cls.page__leftaside}></div>
                <div className={cls.page__content}>
                    <Content articles={articles} />
                </div>
                <div className={cls.page__rightaside}></div>
            </Container>
        </div>
    );
}

export default Profile;
