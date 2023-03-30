import Image from 'next/image';
import cls from './Profile.module.scss'

const Profile = ({ data }) => {
    if (data) {
        return (
            <div className={cls.profile}>
                <div className={cls.profile__img}>
                    <Image
                        src={data?.avatar?.url}
                        layout='fill'
                        objectFit='cover'
                        alt="img"
                    />
                </div>
                <div className={cls.profile__info}>
                    <h4>{data?.name}</h4>
                    <span>{data?.position?.title}</span>
                </div>
            </div>
        );
    } else {
        return (
            <h1>loading</h1>
        )
    }
}

export default Profile;
