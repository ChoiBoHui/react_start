import logo from './assets/grafflogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='Header'>
        <h1>
          <img src={logo} />
        </h1>
        <h1>
          <img src='./assets/grafflogo.png' />
        </h1>
        <h1>
          <img src='/assets/grafflogo.png' />
        </h1>
        <h1>
          <img src={process.env.PUBLIC_URL + '/assets/grafflogo.png'} />
        </h1>

        <section className='bg bg01'>
          01
        </section>
        <section className='bg bg02'>
          02
        </section>
        <section className='bg bg03'>
          03
        </section>
        <section className='bg bg04'>
          04
        </section>
      </header>
      <main>

      </main>
    </div>
  );
}

export default App;
