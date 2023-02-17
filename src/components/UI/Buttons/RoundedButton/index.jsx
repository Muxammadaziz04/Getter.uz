import cls from './RoundedButton.module.scss'

const RoundedButton = ({children, ...other}) => {
    return (
        <button className={cls.btn} {...other}>
            {children}
        </button>
    );
}

export default RoundedButton;
