import { useEffect, useState } from 'react'

import './App.css'



const APIKEY= import.meta.env.VITE_APP_API_KEY;

function App() {
  const [list, setList] = useState(null);

  useEffect(()=>{

    const fetchAllCoinData = async () => {
      try{
        const response = await fetch("https://min-api.cryptocompare.com/data/all/coinlist?&api_key" 
    + APIKEY);

        //checking is the response is ok
        if(!response.ok){
          throw new Error('Failed to fetch coin data')
        }

        //now parse the json response
        const data = await response.json();
        //now save it to the list state variable
        setList(data)
      } catch(error){
        console.error('Error fetching coind data:', error)
      }

    } 
    fetchAllCoinData()

  }, []) // will run just once



  return (
    
      <div className='whole-page'>
        <h1>My Crypto List</h1>
        <ul>
          {list && Object.entries(list.Data).map(([coin])=>
            list.Data[coin].PlatformType === 'blockchain' ? (<li key={list.Data[coin].FullName}>{list.Data[coin].FullName}</li>
) : null
)}
        </ul>
       </div> 
  )}
export default App

//added react dependecies for onmygrind and Crypto
//add .env to gitignore