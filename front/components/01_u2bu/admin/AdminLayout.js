import React from 'react';
import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import GnbLayout from 'components/01_u2bu/common/gnb/GnbLayout';

const AdminLayout = ({ children }) => {
  return (
    <>
      <Row>
        <Col>
          <GnbLayout />
        </Col>
        <Col>{children}</Col>
      </Row>
    </>
  );
};
AdminLayout.proptypes = {
  children: PropTypes.elementType.isRequired,
};

export default AdminLayout;
