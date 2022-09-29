import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Posts from './component/Posts/Posts';

const districtStyle={
  backgroundColor: 'blue',
  margin: '20px',
  borderRadius: '8px',
  padding: '10px',
  color: 'white'
}

function App() {
  return (
    <div className="App">
      <Posts></Posts>
      {/* <District name='Tangail' ForFav='Chomchom'></District>
      <District name='Cumilla' ForFav='Rosmalai'></District>
      <District name='Bogura' ForFav='Dhoi'></District> */}
    </div>
  );
}

function District(props){
  const [power, setPower] = useState(1);

  const increasePower = () => {
    const newPower = power * 2;
    setPower(newPower)
  }
  return(
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <h6>Specialty: {props.ForFav}</h6>
      <h5>Power: {power}</h5>
      <button onClick={increasePower}>Increase multiple</button>
    </div>
  )
}

export default App;
