/**
 * 事件触发器
 * @mode 订阅发布模型
 */
export class EventEmitter {
  private handlers: { [key: string]: Function[] } = {};

  /**
   * 订阅事件
   * @param eventName string
   * @param handler Function
   * @example eventEmitter.on('event1', handler);
   */
  on(eventName: string, handler: Function) {
    if (!this.handlers[eventName]) {
      this.handlers[eventName] = [];
    }
    this.handlers[eventName].push(handler);
  }

  /**
   * 发布事件
   * @param eventName string
   * @param args any[]
   * @example eventEmitter.emit('event1');
   */
  emit(eventName: string, ...args: any[]) {
    const handlers = this.handlers[eventName];
    if (handlers && handlers.length) {
      handlers.forEach((handler) => handler.apply(this, args));
    }
  }

  /**
   * 取消订阅
   * @param eventName string
   * @param handler Function
   * @example emitter.off('event1', handler) // 取消事件 event1 全部订阅
   * emitter.off('event1'); // 取消事件 event1 全部订阅
   * emitter.off('*'); // 取消全部事件订阅
   */
  off(eventName: string, handler?: Function) {
    const handlers = this.handlers[eventName];
    if (eventName === '*') {
      this.handlers = {}
    } else if (!handler) {
      delete this.handlers[eventName]
    } else if (handlers && handlers.length) {
      const index = handlers.indexOf(handler);
      if (index !== -1) {
        handlers.splice(index, 1);
      }
    }

  }
}