import cls from './DashedInput.module.scss'

const DashedInput = ({
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
            <input type={type} placeholder={placeholder} />
        </label>
    );
}

export default DashedInput;
