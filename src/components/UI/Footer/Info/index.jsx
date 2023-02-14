import Container from 'components/UI/Container';
import { FooterLogo } from 'components/UI/icons';
import Link from 'next/link';
import cls from './Info.module.scss'

const FooterInfo = ({ links = [] }) => {
    return (
        <div className={cls.block}>
            <Container>
                <ul className={cls.links}>
                    <li>Copyright: 2023</li>
                    <li>Условия использования</li>
                    <li>Политика конфиденциальности</li>
                </ul>
                <div className={cls.developed}>
                    Developed by: <span><FooterLogo /></span>
                </div>
            </Container>
        </div>
    );
}

export default FooterInfo;
