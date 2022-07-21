import {useEffect, useState, useCallback} from "react";

import {Modal} from '../components/modal';
import {Table} from '../components/table';
import {Retry} from '../components/retry';
import {columnsUser, columnsUsers} from '../components/table/columns';

import {useApi} from '../hooks/useApi';
import {usersAPIUrl, getUserAPIUrl} from '../api';

export const UsersList = () => {
  const [usersData, isUsersLoading, fetchUsersData, , isFetchUsersError] = useApi();
  const [userData, isUserLoading, fetchUserData, setUserData] = useApi();
  const [isModalShown, showModal] = useState(false);
  const [userApiUrl, setUserApiUrl] = useState('');

  useEffect(() => {
    handleFetchUsersData();
  }, []);

  useEffect(() => {
    setUserData([]);
  }, [userApiUrl]);

  const handleFetchUsersData = useCallback(() => {
    fetchUsersData(usersAPIUrl);
  }, [isFetchUsersError])

  const handleClose = useCallback(() => {
    showModal(false);
  }, []);

  const handleFetchUserData = useCallback((childEntityGuid: string) => {
    const url = getUserAPIUrl(childEntityGuid);
    setUserApiUrl(url);
    showModal(true);
    fetchUserData(url);
  }, []);

  return (
    <>
      { !isFetchUsersError || isUsersLoading
        ? <Table
            rowKey="users"
            columns={columnsUsers}
            dataSource={usersData}
            onClick={handleFetchUserData}
            pagination={{position: ['bottomCenter']}}
            loading={isUsersLoading}
           />
        : <Retry onClick={handleFetchUsersData} />
      }
      <Modal
        title="User data:"
        isOpened={isModalShown}
        onClose={handleClose}
      >
        <Table
          rowKey="user"
          columns={columnsUser}
          dataSource={userData}
          pagination={false}
          loading={isUserLoading}
        />
      </Modal>
    </>
  );
}
