import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/es/button/button';

import './Button.less';

export default (props: ButtonProps) => {
  const { children, ...rest } = props;
  return (
    <Button {...rest}>
      <span className='prefix'>Prefix</span>&nbsp;
      {children}
    </Button>
  );
};
