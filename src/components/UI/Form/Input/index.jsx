import { useRef, useState } from 'react';
import { VisibilityOff, Visibility } from "@mui/icons-material"
import SmallText from 'components/UI/Typography/SmallText';

import cls from './Input.module.scss'

const Input = ({
    type = 'text',
    label = '',
    VisibilyIcon = <Visibility sx={{color: '#989898'}} />,
    VisibilyOffIcon = <VisibilityOff sx={{color: '#989898'}} />,
    withIcon = false,
    name = '',
    placeholder = '',
    register = {},
    errors = {}
}) => {
    const inpRef = useRef()
    const [inputType, setInputType] = useState(type)

    return (
        <span className={cls.input}>
            <label className={cls.input__label}>
                <SmallText color='black' fontWeight="500">{label}</SmallText>

                <span style={{ position: 'relative' }}>
                    <input
                        style={{ paddingRight: withIcon ? '50px' : '15px' }}
                        className={`${cls.input__field} ${errors[name] ? cls.input__field__error : ''}`}
                        type={inputType}
                        ref={inpRef}
                        name={name}
                        placeholder={placeholder}
                        {...register}
                    />

                    {
                        withIcon &&
                        <span
                            className={cls.input__icon}
                            onClick={() => setInputType(prev => prev === 'text' ? 'password' : 'text')}
                        >
                            {inputType === 'password' ? VisibilyOffIcon : VisibilyIcon}
                        </span>
                    }
                </span>
                {
                    errors && errors[name] && <span className={cls.input__error}>{errors[name]?.message || 'Error'}</span>
                }
            </label>
        </span>
    );
}

export default Input;
