import Image from 'next/image';
import cls from './Avatar.module.scss'

const Avatar = ({src = '', alt = 'avatar', className, ...other}) => {
    return (
        <div className={`${cls.ava} ${className}`} {...other}>
            <Image 
                src={src}
                layout='fill'
                objectFit='cover'
                alt={alt}
            />
        </div>
    );
}

export default Avatar;
