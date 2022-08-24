import './basic.css';
import { useEffect, useState } from 'react';
// useEffect 는 한번만 실행하라는거, 리액트에서는 sideEffect 는 스테이트를 변경시키는거 말고??




// 여기 쌤꺼보고 복붙.. 해야함..!!!




const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(result => setData(result))
  }, []);

  console.log(data[0].id)

  return (
    <div>
      {
        data.map(it => <li key={it.id}>{it.id} {it.title}</li>)
      }
    </div>
  )
}

export default App;
