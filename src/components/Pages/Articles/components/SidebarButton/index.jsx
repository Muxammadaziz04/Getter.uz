import cls from './SidebarButton.module.scss'

const SidebarButton = ({ children, onClick, ...other }) => {
    return (

        <button className={cls.btn} onClick={onClick} {...other}>
            <h3>{children}</h3>
        </button>
    );
}

export default SidebarButton;
