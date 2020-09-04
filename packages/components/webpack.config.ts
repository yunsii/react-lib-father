import merge from 'webpack-merge';
import path from 'path';

import common from '../../webpack.common';

export default merge(common as any, {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    library: 'Button',
    path: path.resolve(__dirname, './dist'),
  },
});
