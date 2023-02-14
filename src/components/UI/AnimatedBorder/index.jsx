import cls from './AnimatedBorder.module.scss'

const AnimatedBorder = ({children, className}) => {
    return (
        <div className={`${cls.border} ${className}`}>
            {children}
        </div>
    );
}

export default AnimatedBorder;
