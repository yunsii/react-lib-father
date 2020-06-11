export type LoggerLevel = 'log' | 'warn' | 'error';

export interface LoggerOptions {
  /**
   * 产品环境可打印的日志级别
   */
  level?: LoggerLevel;
  /**
   * 禁用，方便开启和关闭日志
   */
  disabled?: boolean;
}

export default class Logger {
  name: string;
  level: LoggerLevel;
  disabled: boolean;

  _prefix: string;
  _map = {
    log: 1,
    warn: 2,
    error: 3,
  };

  constructor(name: string, options?: LoggerOptions) {
    this.name = name;
    this.level = options?.level || 'warn';
    this.disabled = options?.disabled || false;

    this._prefix = `${this.name}`;
  }

  _canPrint(type: LoggerLevel) {
    console.log('process.env.NODE_ENV', process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'production') {
      return this._map[this.level] <= (this._map[type] || 3);
    }
    return true;
  }

  _print(type: LoggerLevel = 'log') {
    return (message: string, ...params: any[]) => {
      if (this.disabled || !this._canPrint(type)) {
        return;
      }

      console[type](`%c[${this._prefix}] %c${message}`, 'font-weight: bolder', 'font-weight: normal', ...params);
    };
  }

  log(message: string, ...params: any[]) {
    this._print('log')(message, ...params);
  }

  warn(message: string, ...params: any[]) {
    this._print('warn')(message, ...params);
  }

  error(message: string, ...params: any[]) {
    this._print('error')(message, ...params);
  }
}
