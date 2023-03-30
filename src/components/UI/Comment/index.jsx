import Image from 'next/image';
import { useState } from 'react';
import cls from './Comment.module.scss';

const Comment = ({ data }) => {
    console.log(data)
    const [number, setNember] = useState(3)
    if (data) {
        return (
            <>
                {data?.slice(0, number).map((e) => (
                    <div className={cls.comment} key={e?.id}>
                        <div className={cls.comment__img}>
                            <Image
                                src={e?.user?.avatar?.url}
                                layout='fill'
                                objectFit='cover'
                            />
                        </div>
                        <div className={cls.comment__content}>
                            <div className={cls.comment__content__info}>
                                <h4>{e?.user?.name}</h4>
                                <span>{e?.user?.position?.title}</span>
                            </div>
                            <div className={cls.comment__content__text}>
                                <p>{e?.text}</p>

                            </div>
                        </div>
                    </div>
                ))}
                <button onClick={() => setNember(number + 3)} >Показать ещё</button>
            </>
        );
    } else {
        return (
            <h1>loading</h1>
        )
    }
}

export default Comment;
