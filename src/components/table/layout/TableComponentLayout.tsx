import React, { FC, useState, useEffect } from "react";
// import TableComponentLayout from "../layout/TableComponentLayout";
import { Empty, Skeleton, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import SkeletonComponent from "../../skeleton";

interface TableProps {
    columns: ColumnsType<any>;
    data: Array<any>;
    loading: boolean;
}

const TableComponentLayout: FC<TableProps> = ({ columns, data, loading }) => {
    return (
        <Table columns={columns} dataSource={data} scroll={{ x: 1080 }} locale={{
            emptyText: loading ? <Skeleton style={{ marginTop: '10px', width: '100%' }} active={true} /> : <Empty />
        }} />
    )
}
export default TableComponentLayout;