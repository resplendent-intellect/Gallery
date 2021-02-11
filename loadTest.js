import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 1 },
    { duration: '1m', target: 10 },
    { duration: '1m', target: 100 },
    { duration: '2m', target: 1100 },
    { duration: '1m', target: 100 },
    { duration: '1m', target: 1 },
  ]
};

const min = 1;
const max = 11000000;

const productNum = Math.floor((Math.random() * (max - min)) + min);

export default function () {
  // http.get('http://test.k6.io');
  http.get(`http://localhost:3001/products/${productNum}`);
  sleep(1);
}
