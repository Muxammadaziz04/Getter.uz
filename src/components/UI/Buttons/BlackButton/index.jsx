import cls from './BlackButton.module.scss'

const BlackButton = ({children}) => {
    return (
        <button className={cls.btn}>
            {children}
        </button>
    );
}

export default BlackButton;
