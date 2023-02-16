import Image from 'next/image';
import cls from './Avatar.module.scss'

const Avatar = ({src = '', alt = 'avatar', className, fullName, job, onMouseEnter, ...other}) => {
    return (
        <div className={`${cls.ava} ${className}`} onMouseEnter={onMouseEnter} {...other}>
            <Image 
                src={src}
                layout='fill'
                objectFit='contain'
                alt={alt}
            />
            <div className={`${cls.tooltip}`}>
                <h3>{fullName}</h3>
                <span>{job}</span>
            </div>
        </div>
    );
}

export default Avatar;
