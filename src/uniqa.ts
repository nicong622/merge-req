interface AsyncFn<T> {
  (...args: unknown[]): Promise<T>
}

export default function uniqa<T>(asyncFn: AsyncFn<T>) {
  const waiting: ((arg: T) => void)[] = [];
  let future: Promise<T> | null = null;

  return (...args: unknown[]) => new Promise((resolve) => {
    waiting.push(resolve);

    if (!future) {
      future = asyncFn(...args);

      future.then((res) => {
        waiting.forEach((resFn) => resFn(res));
        future = null;
      });
    }
  });
}
