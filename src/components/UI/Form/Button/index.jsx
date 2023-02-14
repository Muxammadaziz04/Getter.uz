import cls from './Button.module.scss'

const Button = ({ children, type = 'button', ...other }) => {
    return (
        <button className={cls.btn} type={type} {...other}>
            {children}
        </button>
    );
}

export default Button;
