import Image from 'next/image';
import cls from './Profile.module.scss'

const Profile = () => {
    return (
        <div className={cls.profile}>
            <div className={cls.profile__img}>
                <Image 
                    src='/avatars/abbos_janizakov.png'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={cls.profile__info}>
                <h4>Anton Ptushkin</h4>
                <span>Ux Ui designer</span>
            </div>
        </div>
    );
}

export default Profile;
