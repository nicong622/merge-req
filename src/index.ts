import { fakeReq } from './lib';
import uniqa from './uniqa';

const uniqReq = uniqa(fakeReq);

uniqReq().then(console.log);
uniqReq().then(console.log);
uniqReq().then(console.log);
uniqReq().then(console.log);
uniqReq().then(console.log);
