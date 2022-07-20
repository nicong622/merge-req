interface AsyncFn<T> {
  (...args: unknown[]): Promise<T>
}

export default function mergeReq<T>(asyncFn: AsyncFn<T>) {
  let waiting: ((arg: T) => void)[] = [];
  let future: Promise<T> | null = null;

  return (...args: unknown[]) => {
    return new Promise((resolve) => {
      if (future) {
        future.then((res) => {
          resolve(res);
          return res;
        });

        return;
      }

      waiting.push(resolve);

      future = asyncFn(...args);
      future.then((res) => {
        waiting.forEach((resFn) => resFn(res));
        waiting = [];

        return res;
      });
    });
  };
}
