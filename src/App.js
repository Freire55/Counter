import { useState } from 'react';
import './App.css';

function App() {

  const [num, setNum] = useState(0);
  const [inputnum, setInputnum] = useState(0);

  const Add = () => {
    setNum(num+1)
  }
  const Subtract = () => {
    setNum(num-1)
  }
  const PlusTen = () => {
    setNum(num+10)
  }
  const MinusTen = () => {
    setNum(num-10)
  }
  const Restart = () => {
    setNum(0)
  }
  const PlusInput = () => {
    setNum(num + inputnum)
  }
  const MinusInput = (e) => {
    setNum(num-inputnum)
  }

  return (
    <>
      <h1 className='text-center font-extrabold text-lg'>
        My Counter
      </h1>
      <div className='flex justify-center pt-10'>
        <button className='w-14 h-14 bg-gray-500 text-3xl mr-2' onClick={MinusTen}>- -</button>
        <button className='w-14 h-14 bg-gray-500 text-3xl' onClick={Subtract}>-</button>
        <div className='w-28 h-14 mx-5 flex justify-center items-center text-3xl'>{num}</div>
        <button className='w-14 h-14 bg-gray-500 text-3xl' onClick={Add}>+</button>
        <button className='w-14 h-14 bg-gray-500 text-3xl ml-2' onClick={PlusTen}>+ +</button>
      </div>
      <div className='flex justify-center pt-7'>
        <button className='w-20 h-14 bg-gray-500 text-lg' onClick={MinusInput}>Remove</button>
        <input className='w-14 h-14 text-3xl mr-3 ml-8 text-center' type="number"  min="0" onChange={e => setInputnum(parseInt(e.target.value))}/>
        <button className='w-14 h-14 bg-gray-500 text-lg' onClick={PlusInput}>Add</button>
      </div>
      <div className='flex justify-center pt-7'>
        <button className='bg-gray-500 text-3xl w-40 h-14' onClick={Restart}>Restart</button>
      </div>
    </>
  );
}

export default App;
