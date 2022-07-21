import { Modal as AntdModal } from 'antd';

import Props from './interface';

export const Modal = ({ title, isOpened, onClose, children }: Props) => (
  <>
    <AntdModal
      title={title}
      visible={isOpened}
      onOk={onClose}
      onCancel={onClose}
      footer={false}
      width='80%'
    >
      { children }
    </AntdModal>
  </>
);
