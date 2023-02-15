import FooterInfo from './Info';
import FooterLinks from './Links';

const Footer = ({ links = [], contacts = [], infoLinks = [] }) => {
    return (
        <footer style={{width: '100%'}}>
            <FooterLinks links={links} contacts={contacts} />
            <FooterInfo />
        </footer>
    );
}

export default Footer;
