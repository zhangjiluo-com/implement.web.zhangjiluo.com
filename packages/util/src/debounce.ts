
/**
 * 防抖函数可以限制一个函数的调用频率，即在一定时间内只能调用一次
 * @param callback - 需要被防抖的函数
 * @param delay - 限制函数调用频率的时间间隔
 * @returns 被防抖处理后的函数
 * @example const debouncedFunc = debounce(myFunction, 1000);
 * debouncedFunc(); // myFunction 将不会在这次调用时执行，因为距离上一次调用不到 1000 毫秒
 * debouncedFunc(); // myFunction 将不会在这次调用时执行，因为距离上一次调用不到 1000 毫秒
 * 
 * 防抖函数和节流函数都可以限制一个函数的调用频率，但是它们的实现方式不同。
 * 防抖函数会在函数被调用后，等待一定时间（即delay参数指定的时间），如果在这段时间内函数再次被调用，那么计时器就会被重置，重新等待delay时间。只有在delay时间内没有再次调用函数，才会执行函数。这种方式适用于一些需要等待用户停止操作后才执行的函数，比如搜索框输入联想。
 * 节流函数则是在一定时间内只能调用一次函数。如果在这段时间内函数再次被调用，那么函数不会被执行，直到时间间隔超过delay参数指定的时间。这种方式适用于一些需要限制调用频率的函数，比如滚动事件。
 */
export function debounce(callback: Function, delay: number): (...args: any[]) => void {
  let timer: number;
  return function (this: any, ...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}