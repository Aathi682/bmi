import { useState } from 'react';
import reactLogo from './assets/react.svg'
import './App.css';

function App() {

  const [height, setHeight] = useState('');
  const[weight, setWeight] = useState('');
  const[bmi, setBmi] = useState(null);
  const[status, setStatus] = useState('');
  const[error, setError] = useState(''); 


  const calculateBMI = () => {
    const isValiedHeight=/^\d+$/.test(height);
    const isValiedWeight=/^\d+$/.test(weight);

    if (isValiedHeight && isValiedWeight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setStatus('Underweight');
      } else if (bmiValue < 25) {
        setStatus('Normal weight');
      } else if (bmiValue < 30) {
        setStatus('Overweight');
      } else {
        setStatus('Obesity');
      }

      setError('');

    } else {
      setBmi(null);
      setStatus('');
      setError('Please enter valid height and weight values.');
    }

  };

  function clearAll() {
    setHeight('');
    setWeight('');
    setBmi(null);
    setStatus('');
    setError('');
  } 
  return (
    <>
     <div className='bmi-calculator'> 
      <div className='calculator-form'> 
        </div>
     <div className='box'>  </div>
     <div className='data'> 
      

    <h1>BMI Calculator</h1>
    {error && <p className='error'>{error}</p>}



    <div className="input-container">
      <label htmlFor='Height'>Height (cm):</label>
      <input type='text' id="height" value={height} onChange={(e)=>setHeight(e.target.value)} />

    </div>


     <div className="input-container">
      <label htmlFor='weight'>weight (kg):</label>
      <input type='text' id="weight" value={weight} onChange={(e)=>setWeight(e.target.value)} />


    </div>
   <button className='btn' onClick={calculateBMI}>Calculate BMI</button>
      <button className='btn2'  onClick={clearAll}>Clear</button>

   {bmi!==null && (
    <div className="result"> 
<p>Your BMI is: {bmi} </p>   
<p>Status: {status} </p>
    </div>
   ) }


       </div>
</div>
    </>
  )
};

export default App;
