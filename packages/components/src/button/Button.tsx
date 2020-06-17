import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/es/button/button';

import { getPrefixCls } from '../utils';

export default (props: ButtonProps) => {
  const { children, ...rest } = props;

  const prefixCls = getPrefixCls('button');

  return (
    <Button {...rest}>
      <span className={`${prefixCls}-prefix`}>😀</span>&nbsp;
      {children}
    </Button>
  );
};
