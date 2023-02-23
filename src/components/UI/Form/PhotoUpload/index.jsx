import { UploadIcon } from 'components/UI/icons';
import cls from './PhotoUpload.module.scss'

const PhotoUpload = () => {
    return (
        <label className={cls.label}>
            <div>
                <UploadIcon />
                <span>Загрузить фото</span>
            </div>
            <input type="file" accept='image/.*' />
        </label>
    );
}

export default PhotoUpload;
