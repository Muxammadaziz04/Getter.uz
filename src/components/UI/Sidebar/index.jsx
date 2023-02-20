import SidebarButton from '../../Pages/Articles/components/SidebarButton';
import cls from './Sidebar.module.scss'

const Sidebar = ({ buttons = [] }) => {
    return (
        <div className={cls.sidebar}>
            <h3 className={cls.sidebar__title}>Все статьи</h3>
            <ul className={cls.sidebar__list}>
                {
                    buttons?.length > 0 && buttons.map(btn =>
                        <li className={cls.sidebar__list__item} key={btn.id}>
                            <SidebarButton>{btn.label}</SidebarButton>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Sidebar;
