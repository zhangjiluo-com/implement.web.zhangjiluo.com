/**
 * 节流函数可以限制一个函数的调用频率，即在一定时间内只能调用一次
 * @param callback - 需要被节流的函数
 * @param delay - 限制函数调用频率的时间间隔
 * @returns 被节流处理后的函数
 * @example const throttledFunc = throttle(myFunction, 1000);
 * throttledFunc(); // myFunction 将会在第一次调用时立即执行
 * throttledFunc(); // myFunction 将不会在这次调用时执行，因为距离上一次调用不到 1000 毫秒
 */

export function throttle(callback: Function, delay: number): (...args: any[]) => void {
  let lastTime = 0;
  return function (this: any, ...args: any[]) {
    const now = new Date().getTime();
    if (now - lastTime >= delay) {
      lastTime = now;
      callback.apply(this, args);
    }
  };
} 