import cls from './TextArea.module.scss'

const TextArea = ({ onChange, placeholder }) => {
    return (
        <textarea className={cls.area} cols={3} placeholder={placeholder} onChange={onChange}>

        </textarea>
    );
}

export default TextArea;
