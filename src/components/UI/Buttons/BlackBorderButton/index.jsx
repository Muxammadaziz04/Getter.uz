import cls from './BlackBorderButton.module.scss'

const BlackBorderButton = ({ onClick, children, ...other }) => {
    return (
        <button className={cls.btn} {...other} onClick={onClick}>
            {children}
        </button>
    );
}

export default BlackBorderButton;
