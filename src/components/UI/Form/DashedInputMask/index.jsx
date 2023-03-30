import ReactInputMask from "react-input-mask";
import { useState, useRef } from "react";
import cls from '../DashedInput/DashedInput.module.scss'

const DashedInputMask = ({
    type = 'text',
    placeholder = '',
    Icon = '',
    mask = '',
    onChange
}) => {
    const [name, setName] = useState()
    const [solid, setSolid] = useState(false)
    const ref = useRef()

    const handleChange = (e) => {
        if (type === 'file') {
            const file = e.target.files[0]
            setName(file.name)
            setSolid(file?.name?.length > 0)
        } else {
            setSolid(e.target.value.length > 0)
        }
    }
    return (
        <label className={`${cls.label} ${type === 'file' ? cls.file : ''}`} style={{ borderStyle: solid ? 'solid' : 'dashed' }}>
            {
                Icon ? (
                    <div>
                        {Icon}
                    </div>
                ) : <></>
            }
            <span>{name}</span>
            <ReactInputMask
                className={cls.input}
                placeholder={placeholder}
                onChange={(e) => {
                    handleChange(e),
                        onChange(e)
                }}
                mask={mask}
            />
        </label>
    );
}

export default DashedInputMask;
