import { useRef, useState } from "react"
import cls from './DashedInput.module.scss'

const DashedInput = ({
    type = 'text',
    placeholder = '',
    Icon = ''
}) => {
    const [name, setName] = useState()
    const [solid, setSolid] = useState(false)
    const ref = useRef()

    const handleChange = (e) => {
        if (type === 'file') {
            const file = e.target.files[0]
            setName(file.name)
            setSolid(file.name.length > 0)
        } else {
            setSolid(e.target.value.length > 0)
        }
    }

    return (
        <label className={`${cls.label} ${type === 'file' ? cls.file : ''}`} style={{borderStyle: solid ? 'solid' : 'dashed'}}>
            {
                Icon ? (
                    <div>
                        {Icon}
                    </div>
                ) : <></>
            }
            <span>{name}</span>
            <input type={type} placeholder={placeholder} onChange={handleChange} ref={ref} />
        </label>
    );
}

export default DashedInput;
