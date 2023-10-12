import React, { FC, useState, useEffect } from "react";
// import TableComponentLayout from "../layout/TableComponentLayout";
import { Select } from 'antd';
const { Option } = Select;

interface SelectRoleProps {
    data: Array<any>;
    GetRole: any;
    loading: boolean;
    onChange: any;
}


const SelectRoleComponentLayout: FC<SelectRoleProps> = ({ data, GetRole, loading, onChange }) => {
    return (
        <Select
            labelInValue
            onClick={GetRole}
            size="large"
            placeholder="Pilih Role"
            onChange={onChange}
            // defaultValue={{ value: 'lucy', label: 'Lucy (101)' }}
            style={{ width: '100%' }}
            loading={loading}
        // onChange={GetRole}
        // options={data.map((i: any) => (i.id, i.name))}
        >
            {data?.map((item: any, index: any) => (
                <Option
                    key={index}
                    value={item.id}
                    disabled={item?.disabled || false}
                >
                    {item.name}
                </Option>
            ))}

        </Select>
    )
}
export default SelectRoleComponentLayout;