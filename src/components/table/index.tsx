import React from "react";
import { Table as AntdTable } from 'antd';
import { Props } from './interface';
import 'antd/dist/antd.css';

export const Table =  ({ columns, dataSource, pagination, loading, onClick }: Props) => {
  return (
    <>
      <AntdTable
        columns={columns}
        dataSource={dataSource}
        pagination={pagination}
        loading={loading}
        bordered
        onRow={({childEntityGuid}) => ({
          onClick: () => { if (onClick) onClick(childEntityGuid)}
        })}
      />
    </>
  );
}
