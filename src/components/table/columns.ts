import {ColumnsType} from "antd/es/table";

import { User } from '../../interfaces/user';

export const columnsUsers: ColumnsType<User> = [
  {
    title: 'Name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Last name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Country',
    dataIndex: 'countryName',
    key: 'countryName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
];
export const columnsUser: ColumnsType<User> = [
  {
    title: 'Name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Last name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Postcode',
    dataIndex: 'postcode',
    key: 'postcode',
  },
  {
    title: 'House',
    dataIndex: 'houseName',
    key: 'houseName',
  },
  {
    title: 'Street',
    dataIndex: 'street',
    key: 'street',
  },
  {
    title: 'County',
    dataIndex: 'county',
    key: 'county',
  },
  {
    title: 'Town',
    dataIndex: 'town',
    key: 'town',
  },
  {
    title: 'Country',
    dataIndex: 'countryName',
    key: 'countryName',
  },
];

