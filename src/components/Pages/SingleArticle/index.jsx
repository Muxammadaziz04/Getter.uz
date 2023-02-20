import Container from 'components/UI/Container';
import Sidebar from 'components/UI/Sidebar';
import Aside from './components/Aside';
import Content from './components/Content';
import { sidebarBtns } from '../Articles/data';
import cls from './SingleArticle.module.scss';

const SingleArticle = () => {
    return (
        <div className={cls.page}>
            <Container>
                <div className={cls.page__leftaside}>
                    <Sidebar buttons={sidebarBtns} />
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
