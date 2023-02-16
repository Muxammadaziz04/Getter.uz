import Image from 'next/image';
import cls from './Avatar.module.scss'

const Avatar = ({src = '', alt = 'avatar', className, fullName, job, index = 0, onMouseEnter, ...other}) => {
    return (
        <div className={`${cls.ava} ${className}`} onMouseEnter={onMouseEnter} {...other}>
            <Image 
                src={src}
                layout='fill'
                objectFit='contain'
                alt={alt}
            />
            <div className={`${cls.tooltip} ${index % 2 ? cls.tooltip__top : ''}`}>
                <h3>{fullName}</h3>
                <span>{job}</span>
            </div>
        </div>
    );
}

export default Avatar;
