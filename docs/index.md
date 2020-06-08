## Hello, react-lib-father!

```jsx
import React from 'react';
import Logger from 'logger';
import Button from 'button';

const logger = new Logger('Demo');
logger.log('hello');

export default () => {
  return (
    <div>
      <h2>First Demo</h2>
      <Button />
    </div>
  );
};
```
