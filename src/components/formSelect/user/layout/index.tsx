import React, { FC, useState, useEffect } from "react";
// import TableComponentLayout from "../layout/TableComponentLayout";
import { Select } from 'antd';
const { Option } = Select;

interface SelectUserProps {
    data: Array<any>;
    GetUser: any;
    loading: boolean;
    onChange: any;
    value: number;
}


const SelectUserComponentLayout: FC<SelectUserProps> = ({ data, GetUser, loading, onChange, value }) => {
    return (
        <Select
            onClick={GetUser}
            size="large"
            placeholder="Pilih User"
            onChange={onChange}
            value={value}
            // defaultValue={{ value: 'lucy', label: 'Lucy (101)' }}
            style={{ width: '100%' }}
            loading={loading}
        // onChange={GetUser}
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
export default SelectUserComponentLayout;