import './basic.css';
import { useEffect, useState } from 'react';
// useEffect 는 한번만 실행하라는거, 리액트에서는 sideEffect 는 스테이트를 변경시키는거 말고??

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(result => setData(result))
  }, []);

  // axios 

  //JSON.parse()

  // console.log(Object(data[0]).id)
  // async await ????

  return (
    <div>
      {
        data.map(it => <li key={it.id}>{it.id} {it.title}</li>).slice(0, 10)
      }
    </div>
  )
}

export default App;
