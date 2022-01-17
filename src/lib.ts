export default {};

export function fakeReq(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('resolve');
      resolve('ok');
    }, 1000);
  });
}
