import { useRef, useState } from "react";
import './basic.css';
// const App = () => {
//   const Home = () => {
//     return <div>007</div>
//   }
//   const a = 'A';
//   return <p>
//     {a} a
//     <Home />
//   </p>
// }
// return 안에만 안써주면 함수 표현식이 중첩돼도 괜찮다.

//두번 실행하는건 index.js에 <React.StrictMode>, 스테이트가 변하는걸 감지하기 때문!
const App = () => {
  // let num = 1;
  const [num, setNum] = useState(1);
  // const link = useRef(1);
  const [toggle, setToggle] = useState(true)
  // [이름,작용이름] 작용이름은 카멜케이스
  // 예약어(ex. true, this, function 등.. 예약어는 사용 불가)
  // const 된 것들은 위쪽 import {}안에 들어가야 나오는듯?
  // console.log('App')
  // console.log(num)

  const Test = () => {
    return (
      <div>
        hellow
      </div>
    )
  }

  // 리액트는 함수식을 태그에 바로 쓴다.
  return (
    <>
      {/* {num} {link.current} */}
      {num}
      <section className={toggle ? '' : 'on'}>
        {toggle ? 'loading...' : <Test />}
        {toggle ? <strong>01</strong> : null}
      </section>
      <div>000</div>
      {/* <div ref={link}>000</div> */}
      {/* {console.log(num, link.current)} */}
      <button onClick={
        () => (
          setNum(num + 1),
          console.log(toggle),
          setToggle(!toggle),
          console.log(num)
          //num = num + 1,  //아래와 같음.. 근데 아직 뭔지 모르겠음...
          // num++,
          // link.current = link.current + 1,
          // console.log(link.current)
        ) // {}는 리턴값을 쓸 때 쓰는거고, ()은 리턴이 없음
      }>click</button>
    </>
  )
}


// 함수표현식은 호이스팅 되지 않는데..?
export default App;
