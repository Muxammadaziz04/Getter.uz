import cls from './TextArea.module.scss'

const TextArea = ({ onChange }) => {
    return (
        <textarea className={cls.area} cols={3} onChange={onChange}>

        </textarea>
    );
}

export default TextArea;
