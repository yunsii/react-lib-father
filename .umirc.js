export default {
  title: 'react lib father',
  mode: 'site',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
  base: '/react-lib-father',
  publicPath: '/react-lib-father/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
};
