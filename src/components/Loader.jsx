import React from 'react';
import './Loader.css';


const Loader = () => {
  const load = async () => {
    console.log('Load!');
    const res = await fetch('https://www.tut.by');
    console.log(res);
  }
  return (
    <div className="App">
      <button onClick={load} >
        Заебумба
      </button>
    </div>
  );
}

export default Loader;
