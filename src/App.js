import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';

const fetchCountries = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.log(error);
  }
}

const Card = ({ country }) => {
  return (
    <div className="card">
      <img src={country.flags.png} alt={country.name.common} />
      <h2>{country.name.common}</h2>
      <p>{country.capital}</p>
    </div>
  )
}

function App() {

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetchCountries().then(data => {
      setCountries(data);
    });
  }, []);


  return (
    <div className='card-grid-container'>
      {countries.map((country, index) => {
        return <Card key={index} country={country} />
      })}
    </div>
  );
}

export default App;
