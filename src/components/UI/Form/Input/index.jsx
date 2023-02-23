import { useState, useRef, useEffect } from 'react';
import cls from './Input.module.scss'

const Input = ({
    type = 'text',
    placeholder = '',
    withData = false,
    data = []
}) => {
    const inputRef = useRef()
    const [filteredData, setFilteredData] = useState(data)
    const [isVisible, setIsVisible] = useState(false)
    
    useEffect(() => {
        if(inputRef.current !== document.activeElement) return setIsVisible(false)
        if(filteredData.length === 1 && filteredData[0] === inputRef.current.value) {
            return setIsVisible(false)
        } else if(filteredData.length > 0) {
            return setIsVisible(true)
        } else {
            return setIsVisible(false)
        }
    }, [filteredData])

    return (
        <label className={cls.label}>
            <input
                className={cls.input}
                type={type}
                placeholder={placeholder}
                ref={inputRef}
                onChange={(e) => setFilteredData(data.filter(data => data?.toLowerCase().includes(e.target.value?.toLowerCase())))}
                onFocus={(e) => {
                    if(filteredData.length === 1 && filteredData[0] === e.target.value) {
                        return setIsVisible(false)
                    } else if(filteredData.length > 0) {
                        return setIsVisible(true)
                    } else {
                        return setIsVisible(false)
                    }
                }}
                onBlur={() => setTimeout(() => setIsVisible(false), 200)}
            />
            {
                withData && isVisible && filteredData?.length > 0 &&
                <div>
                    {
                        filteredData?.length > 0 && filteredData.map(data =>
                            <span onClick={() => {inputRef.current.value = data}}>{data}</span>
                        )
                    }
                </div>
            }
        </label>
    );
}

export default Input;
