import cls from './VioleteInput.module.scss'

const VioleteInput = ({
    type = 'text',
    placeholder = '',
    Icon = '',
    onChange
}) => {
    return (
        <label className={cls.label}>
            {
                Icon ? (
                    <div>
                        {Icon}
                    </div>
                ) : <></>
            }
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
        </label>
    );
}

export default VioleteInput;
