// function App() {
//   return <>
//     보통 이렇게 쓰는데,
//   </>
// }

// const App = function () {
//   return <>
//     얘는 함수니까 이렇게(=const) 쓸 수 있다고 했죠?
//     그리고 이렇게 슬빠에야 귀찮으니까..
//   </>
// }


import { useState } from 'react';
import Test from './list';

const App = () => {
  const [num, setNum] = useState(1);
  const numHamdler = () => (setNum(num + 1))
  return (
    <>
      <h1>{num}</h1>
      {/* <button onClick={numHamdler}>num plus</button> */}
      <Test list="일번이" name="동그라미" age={21} onClick={numHamdler} />
      <Test list="이번이" name="동그라미" age={22} />
      <Test list="삼번이" name="동그라미" age={23} />
      <Test list="사번이" name="동그라미" age={24} />
      <div>{num}</div>
      <div>02</div>
      {/* 이렇게 쓰는 사람이 많겠죠? */}
    </>
  )
}


export default App;