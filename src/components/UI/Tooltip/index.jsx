import cls from './Tooltip.module.scss'

const Tooltip = ({children, ...other}) => {
    return (
        <div>
            {children}
            <div className={cls.tooltip}></div>
        </div>
    );
}

export default Tooltip;
