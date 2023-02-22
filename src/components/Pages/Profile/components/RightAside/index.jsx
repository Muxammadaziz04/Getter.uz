import Image from 'next/image';
import cls from './RightAside.module.scss'

const RightAside = () => {
    return (
        <div className={cls.aside}>
            {/* <div className={cls.aside__profile}>
                <div className={cls.aside__profile__img}>
                    <Image 
                        src='/avatars/abbos_janizakov.png'
                        layout='fill'
                        objectFit='cover'
                        alt='image'
                    />
                </div>
                <div className={cls.aside__profile__info}>
                    <h3>Anton Ptushkin</h3>
                    <span>Ux Ui designer</span>
                </div>
            </div> */}
        </div>
    );
}

export default RightAside;
