import RoundedButton from 'components/UI/Buttons/RoundedButton';
import { useRef, useState } from 'react';
import cls from './Datainput.module.scss'

const DataInput = ({data = [], type = 'text', placeholder = ''}) => {
    const inputRef = useRef()
    return (
        <div className={cls.input}>
            <input type={type} placeholder={placeholder} ref={inputRef} />
            <div className={cls.input__data}>
                    {
                        data?.length > 0 && data.map(data => 
                            <RoundedButton key={data} onClick={() => inputRef.current.value = data}>
                                {data}
                            </RoundedButton>
                        )
                    }
            </div>
        </div>
    );
}

export default DataInput;
