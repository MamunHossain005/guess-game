import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [checkValue, setCheckValue] = useState(parseInt(1 + Math.random() * 100));
  const[msg, setMsg] = useState('');
  const[msgStyle, setMsgStyle] = useState(false);
  const[guessValues, setGuessValues] = useState([]);
  const[win, setWin] = useState(false);
  const[count, setCount] = useState(0);

  const handleChange = (event) => {
    let val = event.target.value;
    setInputValue(val);
  }

  const handleCheck = () => {
    let cnt = count + 1;
    setCount(cnt);
    // setLose(false);
    if(count > 10 || win){
      handleRestart();
    }
    else {
      if(inputValue <= 0) setMsg('Please enter a valid number between 1 to 100.');
      else if(inputValue > checkValue) setMsg('Your guess is too high.');
      else if(inputValue < checkValue) setMsg('Your guess is too low.');
      else {
        setMsg('Awesome job! you got it.');
        setMsgStyle(true);
        setWin(true);
      }
  
      if(inputValue > 0) {
        let newGuessValues = [...guessValues, inputValue];
        setGuessValues(newGuessValues);
      }
    }
  }

  const handleRestart = () => {
    let num = parseInt(1 + Math.random() * 100);
    setCheckValue(num);
    setInputValue(0);
    setMsg('');
    setMsgStyle(false);
    setGuessValues([]);
    setCount(0);
    setWin(false);
  }

  return (
    <div className='text-center'>
      <Header></Header>
      <input type="number" name="" value={inputValue === 0 ? 'Please enter a number' : inputValue} id="number-field" className='pl-3 mt-8 border-2 rounded-lg w-1/2 md:w-1/3 h-10 md:h-12 font-medium md:text-xl focus:border-[3px] focus:border-sky-400 focus:outline-none' onChange={handleChange} placeholder='Please enter a number'/>
      <div className={(msg && count <= 10)? ((msgStyle) ? 'bg-emerald-300 p-2 mt-4 w-1/2 md:w-1/3 mx-auto rounded-lg' : 'bg-orange-300 p-2 mt-4 w-1/2 md:w-1/3 mx-auto rounded-lg') : 'hidden'}>
        <p className='font-semibold'>{msg}</p>
      </div>
      <p className={(count > 10) ? 'bg-red-500 p-2 mt-4 w-1/2 md:w-1/3 mx-auto rounded-lg' : 'hidden'}>You Loosed The Game</p>
      <div className='mt-5'>
        <button onClick={handleCheck} className='text-xl font-bold py-2 px-6 mr-2 bg-gray-100 rounded-lg hover:bg-gray-700 hover:text-white'>Check Me</button>
        <button onClick={handleRestart} className='text-xl font-bold py-2 px-6 mr-2 bg-gray-100 rounded-lg hover:bg-gray-700 hover:text-white'>Restart</button>
      </div>
      <div className='mt-4'>
        {count <= 10 && (guessValues.map((val, idx) => <p key={idx} className='border-2 w-72 mx-auto mb-1 p-1 rounded-lg'>You Guessed {val}</p>))}
      </div>
    </div>
  )
}

export default App
