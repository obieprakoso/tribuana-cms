import React, { FC, useState, useEffect } from "react";
// import TableComponentLayout from "../layout/TableComponentLayout";
import { Select } from 'antd';
const { Option } = Select;

interface SelectPaymentMethodProps {
    data: Array<any>;
    GetPaymentMethod: any;
    loading: boolean;
    onChange: any;
    value: number;
}


const SelectPaymentMethodComponentLayout: FC<SelectPaymentMethodProps> = ({ data, GetPaymentMethod, loading, onChange, value }) => {
    return (
        <Select
            onClick={GetPaymentMethod}
            size="large"
            placeholder="Pilih PaymentMethod"
            onChange={onChange}
            value={value}
            // defaultValue={{ value: 'lucy', label: 'Lucy (101)' }}
            style={{ width: '100%' }}
            loading={loading}
        // onChange={GetPaymentMethod}
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
export default SelectPaymentMethodComponentLayout;