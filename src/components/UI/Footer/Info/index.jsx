import Container from 'components/UI/Container';
import { FooterLogo } from 'components/UI/icons';
import { useRouter } from 'next/router';
import cls from './Info.module.scss'

const FooterInfo = ({ links = [] }) => {
    const router = useRouter()
    return (
        <div className={cls.block}>
            <Container>
                <ul className={cls.links}>
                    <li>Copyright: 2023</li>
                    <li>Условия использования</li>
                    <li>Политика конфиденциальности</li>
                </ul>
                <div className={cls.developed} onClick={() => router.push('/')}>
                    Developed by: <span><FooterLogo /></span>
                </div>
            </Container>
        </div>
    );
}

export default FooterInfo;
