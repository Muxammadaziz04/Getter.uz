import RoundedButton from 'components/UI/Buttons/RoundedButton';
import { useRef, useState } from 'react';
import cls from './Datainput.module.scss'

const DataInput = ({ data = [], value, type = 'text', placeholder = '', onKeyDown, onChange }) => {
    const inputRef = useRef()
    return (
        <div className={cls.input}>
            <input type={type} placeholder={placeholder} value={value} ref={inputRef} onChange={onChange} onKeyDown={onKeyDown} />
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
