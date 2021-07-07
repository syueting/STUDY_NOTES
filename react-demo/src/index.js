import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
// import reportWebVitals from './reportWebVitals';

// 变量
const name = "React";
const obj = {
  a: 'hello',
  b: 'world'
}
// 函数表达式
function fomatStr(name) {
  return name.a + " " + name.b;
};

// jsx对象
const greet = <div>这是一个jsx对象</div>;

const jsx = (
  <div>
    hello, {name}
    {greet}
    <div>{fomatStr(obj)}</div>

  </div>
);


ReactDOM.render(
  jsx,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
