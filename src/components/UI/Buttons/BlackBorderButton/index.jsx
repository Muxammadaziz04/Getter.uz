import cls from './BlackBorderButton.module.scss'

const BlackBorderButton = ({children, ...other}) => {
    return (
        <button className={cls.btn} {...other}>
            {children}
        </button>
    );
}

export default BlackBorderButton;
