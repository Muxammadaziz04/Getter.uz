import Container from 'components/UI/Container';
import Aside from './components/Aside';
import cls from './SingleArticle.module.scss'

const SingleArticle = () => {
    return (
        <div className={cls.page}>
            <Container>
                <div className={cls.page__content}></div>
                <div className={cls.page__aside}>
                    <Aside />
                </div>
            </Container>
        </div>
    );
}

export default SingleArticle;
