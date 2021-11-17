import logo from './logo.svg';
import './App.css';
import List from './List';
import data from './data';
import { useState,useEffect } from 'react';

function App() {
  const [people,setPeople] = useState(data);
  const Handleclear = () =>{
      setPeople([])
  }
 
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays for today</h3>
        <List people={people}/>
        <button onClick={Handleclear}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
