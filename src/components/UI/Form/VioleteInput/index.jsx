import cls from './VioleteInput.module.scss'

const VioleteInput = ({
    type = 'text',
    placeholder = '',
    Icon = ''
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
            />
        </label>
    );
}

export default VioleteInput;
