import { fakeReq } from './lib';
import mergeReq from './mergeReq';

const uniqReq = mergeReq(fakeReq);

uniqReq().then(console.log);
uniqReq().then(console.log);
uniqReq().then(console.log);

setTimeout(() => {
  uniqReq().then(console.log);
  uniqReq().then(console.log);
  uniqReq().then(console.log);
  uniqReq().then(console.log);
  uniqReq().then(console.log);
}, 1500);