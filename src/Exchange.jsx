import React, { useEffect, useState } from 'react'
import './Exchange.css'
import { Table } from 'react-bootstrap'
import usd from './img/usa.png'
import tj from './img/tj.png'
import rub from './img/rus.png'
import euro from './img/euro.png'

function Exchange() {

    const url='https://v6.exchangerate-api.com/v6/6db98e2f06190c705f39b046/latest/USD'

    let [rates,setRates]=useState(0);

    const ExchangeApi=async ()=>{

        const res=await fetch(url);

        const data=await res.json();
  
        rates=await data.conversion_rates; 

        setRates(rates)
        
    }
    ExchangeApi();

 
  return (

    <div className='exchange'>
    <h2>ОНЛАЙН КУРС ВАЛЮТ</h2>
  

            <Table>
           <tbody>

         <tr>
         <td>
        <img src={usd} alt="usd" width={30}/>
        </td>   
    
        <td><span>USD</span></td>
    
        <td><span>доллар к сомони</span></td>
    
        <td>
            <span>{rates.TJS}</span>
        </td>
    
        <td>
            <img src={tj} alt="tj" width={30}/>
        </td>
         </tr>
    
         <tr>
         <td>
        <img src={usd} alt="usd" width={30}/>
        </td>   
    
        <td><span>USD</span></td>
    
        <td><span>доллар к рублю</span></td>
    
        <td>
            <span>{rates.RUB}</span>
        </td>
    
        <td>
            <img src={rub} alt="tj" width={30}/>
        </td>
         </tr>
    
         <tr>
         <td>
        <img src={usd} alt="usd" width={30}/>
        </td>   
    
        <td><span>USD</span></td>
    
        <td><span>доллар к евро</span></td>
    
        <td>
            <span>{rates.EUR}</span>
        </td>
    
        <td>
            <img src={euro} alt="tj" width={30}/>
        </td>
         </tr>   
         </tbody>

    </Table>  
    
    
    </div>
  )
}

export default Exchange