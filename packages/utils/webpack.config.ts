import merge from 'webpack-merge';
import path from 'path';

import common from '../../webpack.common';

module.exports = merge(common as any, {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    library: 'Logger',
    path: path.resolve(__dirname, './dist'),
  },
});
