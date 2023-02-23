import dynamic from 'next/dynamic';
import { articles } from 'components/Pages/Articles/data';
import BlackBorderButton from 'components/UI/Buttons/BlackBorderButton';
import DataInput from 'components/UI/Form/DataInput';
import TextArea from 'components/UI/Form/TextArea';
import { EditIcon } from 'components/UI/icons';
import cls from './Content.module.scss'
import Image from 'next/image';

const RichText = dynamic(() => import('components/UI/Form/RichText'), {ssr: false});

const Content = () => {
    return (
        <div className={cls.content}>
            <div className={cls.content__btns}>
                <button><EditIcon />Изменить</button>
                <button>Предпросмотр</button>
            </div>
            <div className={cls.content__form}>
                <div className={cls.content__form__elements}>
                    <div className={cls.content__form__inputs}>
                        <DataInput placeholder='Выберите категории' data={articles[0].hashtags} />
                        <DataInput placeholder='# Добавить хэштег' data={articles[0].hashtags} />
                    </div>
                    <div>
                        <TextArea />
                    </div>
                    <div>
                        <RichText />
                    </div>
                </div>
                <div className={cls.content__form__img}>
                    <Image 
                        src='/preview.png'
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
            </div>
            <BlackBorderButton>Опубликовать </BlackBorderButton>
        </div>
    );
}

export default Content;