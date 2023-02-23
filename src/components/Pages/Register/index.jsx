import AnimatedCircle from 'components/UI/AnimatedCircle';
import Content from './components/Content';
import Navbar from './components/Navbar';
import cls from './Register.module.scss'

const Register = () => {
    return (
        <div className={cls.page}>
            <Navbar />
            <Content />
            <AnimatedCircle />
        </div>
    );
}

export default Register;
