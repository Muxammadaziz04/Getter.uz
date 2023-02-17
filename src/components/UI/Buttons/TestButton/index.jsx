import cls from './TestButton.module.scss'

const TestButton = () => {
    return (
        <button className={cls.btn}>
            Сайт работает в тестовом режиме
        </button>
    );
}

export default TestButton;
