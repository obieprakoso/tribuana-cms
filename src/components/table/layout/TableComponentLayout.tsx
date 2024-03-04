/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useState, useEffect } from "react";
// import TableComponentLayout from "../layout/TableComponentLayout";
import { Empty, Skeleton, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import SkeletonComponent from "../../skeleton";
import SkeletonTable from "./SkeletonTable";

interface TableProps {
    columns: ColumnsType<any>;
    data: Array<any>;
    loading: boolean;
}

const TableComponentLayout: FC<TableProps> = ({ columns, data, loading }) => {
    return (
        <SkeletonTable loading={loading} columns={columns}>
            <Table rowKey={record => data.indexOf(record)} columns={columns} dataSource={data} scroll={{ x: 1080 }} loading={loading} />
        </SkeletonTable>
    )
}
export default TableComponentLayout;