import {ColumnsType, TablePaginationConfig} from "antd/es/table";

import { User } from '../../interfaces/user'

export interface Props {
  rowKey: string,
  columns: ColumnsType<User>,
  dataSource: Array<User>,
  onClick?: Function,
  pagination?: false | TablePaginationConfig | undefined,
  loading?: boolean,
}
