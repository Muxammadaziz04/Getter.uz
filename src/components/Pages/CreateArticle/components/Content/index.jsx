import { EditIcon } from 'components/UI/icons';
import cls from './Content.module.scss'

const Content = () => {
    return (
        <div className={cls.content}>
            <div className={cls.content__btns}>
                <button><EditIcon />Изменить</button>
                <button>Предпросмотр</button>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Content;