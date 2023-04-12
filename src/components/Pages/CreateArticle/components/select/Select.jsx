import React from 'react';
import { Select, Space } from 'antd';



const SelectInput = ({ categories = [], onChange }) => {

    const newErray = []


    categories?.forEach(e => {
        newErray.push({ value: e.id, label: e.title });
    })

    return (
        <>
            <Space wrap>
                <Select

                    defaultValue="Выберите категории"
                    style={{ width: 238 }}
                    onChange={(id) => {

                        onChange(id)

                    }}
                    options={newErray}
                />


            </Space>
        </>
    )
};

export default SelectInput;