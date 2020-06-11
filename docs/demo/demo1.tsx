import React from 'react';
import { Button } from 'components';
import { Logger } from 'utils';

const logger = new Logger('Demo');
logger.log('hello');

export default () => {
  return (
    <div>
      <h2>First Demo</h2>
      <Button>Antd Button</Button>
    </div>
  );
};
