import { useState, useRef, useEffect } from 'react';
import cls from './Input.module.scss'

const Input = ({
    type = 'text',
    placeholder = '',
    withData = false,
    data = [],
    onChange,
    value = '',
    onClick,

}) => {
    const inputRef = useRef()
    const [filteredData, setFilteredData] = useState(data)
    const [isVisible, setIsVisible] = useState(false)
    // const [positionId, setPositionId] = useState()
    // const [inputvalue, SetInputvalue] = useState()

    useEffect(() => {
        if (inputRef.current !== document.activeElement) return setIsVisible(false)
        if (filteredData.length === 1 && filteredData[0].title === inputRef.current.value) {
            return setIsVisible(false)
        } else if (filteredData.length > 0) {
            return setIsVisible(true)
        } else {
            return setIsVisible(false)
        }
    }, [filteredData])


    return (
        <label className={cls.label} >
            <input
                className={cls.input}
                type={type}
                placeholder={placeholder}
                ref={inputRef}

                {...{ [value && 'value']: value }}
                onChange={(e) => {
                    setFilteredData(data?.filter(data => data?.title?.toLowerCase().includes(e.target.value?.toLowerCase()))
                    )
                    data.map(data => {
                        if (data?.title?.toLowerCase().includes(e.target.value?.toLowerCase())) {
                            onChange(e, data?.id)
                        }
                    })
                    onChange(e)
                }}
                onFocus={(e) => {
                    if (filteredData.length === 1 && filteredData[0].title === e.target.value) {
                        return setIsVisible(false)
                    } else if (filteredData.length > 0) {
                        return setIsVisible(true)
                    } else {
                        return setIsVisible(false)
                    }
                }}
                onBlur={() => setTimeout(() => setIsVisible(false), 500)}
            />
            {
                withData && isVisible && filteredData?.length > 0 &&
                <div className='asd'>
                    {
                        filteredData?.length > 0 && filteredData.map(data =>
                            <span
                                onClick={() => onClick(data?.title, data?.id)}
                                key={data?.id}

                            >{data?.title}</span>
                        )
                    }
                </div>
            }
        </label >
    );
}

export default Input;
