interface AsyncFn<T> {
  (...args: unknown[]): Promise<T>
}

export default function uniqa<T>(asyncFn: AsyncFn<T>) {
  const waiting: ((arg: T) => void)[] = [];
  let future: Promise<T> | null = null;

  return (...args: unknown[]) => new Promise((resolve) => {
    if (future) {
      return future.then((res) => {
        resolve(res);
        return res;
      });
    }

    waiting.push(resolve);

    future = asyncFn(...args);
    future.then((res) => {
      waiting.forEach((resFn) => resFn(res));
      waiting = [];

      return res;
    });
  });
}
