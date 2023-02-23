import Container from 'components/UI/Container';
import LeftAside from '../Profile/components/LeftAside';
import Navbar from '../Profile/components/Navbar';
import Content from './components/Content';
import cls from './CreateArticle.module.scss'

const CreateArticle = () => {
    return (
        <div style={{ width: '100%', flexGrow: '1' }}>
            <Navbar />
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
