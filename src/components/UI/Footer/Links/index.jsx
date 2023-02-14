import Container from 'components/UI/Container';
import Link from 'next/link';
import cls from './Links.module.scss'

const FooterLinks = ({links = [], contacts = []}) => {
    return (
        <div className={cls.block}>
            <Container>
                <ul className={cls.links}>
                    {
                        links?.length > 0 && links.map((link) =>
                            <li key={link.id}>
                                <Link href={link.href}><a>{link.label}</a></Link>
                            </li>
                        )
                    }
                </ul>
                <ul className={cls.links}>
                    {
                        contacts?.length > 0 && contacts.map((link) =>
                            <li key={link.id}>
                                <Link href={link.href}>
                                    <a>
                                        {link.label}
                                        {typeof link.icon === 'function' && link.icon()}
                                    </a>
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </Container>
        </div>
    );
}

export default FooterLinks;
