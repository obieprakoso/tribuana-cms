import React, { FC, useState, useEffect } from "react";
// import TableComponentLayout from "../layout/TableComponentLayout";
import { Select } from 'antd';
const { Option } = Select;

interface SelectPaymentMenuProps {
    data: Array<any>;
    GetPaymentMenu: any;
    loading: boolean;
    onChange: any;
    value: number;
}


const SelectPaymentMenuComponentLayout: FC<SelectPaymentMenuProps> = ({ data, GetPaymentMenu, loading, onChange, value }) => {
    return (
        <Select
            onClick={GetPaymentMenu}
            size="large"
            placeholder="Pilih PaymentMenu"
            onChange={onChange}
            value={value}
            // defaultValue={{ value: 'lucy', label: 'Lucy (101)' }}
            style={{ width: '100%' }}
            loading={loading}
        // onChange={GetPaymentMenu}
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
export default SelectPaymentMenuComponentLayout;