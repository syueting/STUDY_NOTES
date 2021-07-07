import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 引入src资源图片
import girl from './img/tiger.png'

// import App from './App';
// import reportWebVitals from './reportWebVitals';

// 变量
const name = "React";
const obj = {
  a: 'hello',
  b: 'world'
}
const arr = [
  { name: '小红', age: '21' },
  { name: '小明', age: '22' },
  { name: '老铁', age: '23' },
]
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

    <div>
      react 项目会以 public 文件夹为根目录
      <img src="/images/girl.png" alt="girl" />
      <img src={girl} alt="girl"/>
    </div>

    <div className="success" style={{height: '50px', fontSize: '18px'}}>
      {fomatStr(obj)}
    </div>

    <ul>
      {arr.map(item => (
        <li key={item.age}>{item.name}的年龄是{item.age}岁</li>
      ))}
    </ul>

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
