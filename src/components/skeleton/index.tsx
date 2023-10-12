import React, { FC, useState, useEffect } from "react";
// import TableComponentLayout from "../layout/TableComponentLayout";
import { Skeleton } from 'antd';

interface SkeletonProps {
    isActive: boolean
}

const SkeletonComponent: FC<SkeletonProps> = ({ isActive }) => {
    return (
        <Skeleton style={{ width: "100%" }} active={isActive} />
    )
}
export default SkeletonComponent;