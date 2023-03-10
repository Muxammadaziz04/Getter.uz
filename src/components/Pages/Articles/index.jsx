import Sidebar from '../../UI/Sidebar';
import Container from 'components/UI/Container';
import Content from './components/Content';
import { articles, sidebarBtns } from './data';
import cls from './Articles.module.scss'

const Articles = () => {
    return (
        <div className={cls.page}>
            <Container>
                <div className={cls.page__sidebar}>
                    <Sidebar buttons={sidebarBtns} />
                </div>
                <div className={cls.page__content}>
                    <Content articles={articles} />
                </div>
            </Container>
        </div>
    );
}

export default Articles;
