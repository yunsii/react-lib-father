import del from 'del';

del.sync(['./packages/*/{es,lib}/**/__{test,tests}__/**', './packages/*/{es,lib}/**/demo/**']);
