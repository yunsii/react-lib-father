---
order: 1
nav:
  title: 指南
  order: 1
---

## Hello, react lib father!

```jsx
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
```
