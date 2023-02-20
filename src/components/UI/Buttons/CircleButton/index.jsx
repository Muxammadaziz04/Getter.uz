import cls from './CircleButton.module.scss'

const CircleButton = ({children}) => {
    return (
        <button className={cls.btn}>
            {children}
        </button>
    );
}

export default CircleButton;