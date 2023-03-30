import { UploadIcon } from 'components/UI/icons';
import cls from './PhotoUpload.module.scss'

const PhotoUpload = ({
    onChange,
    img
}) => {

    return (
        <label className={cls.label} >
            <div>
                <UploadIcon />
                <span>Загрузить фото</span>
            </div>
            <input type="file" accept='image/.*' onChange={onChange} />

        </label>
    );
}

export default PhotoUpload;