import React, { useEffect, useState } from 'react'
import './App.css'


const App=()=>{
  const [data,setData]=useState([]);
  console.log(data);
  useEffect(()=>{
    getData();
  },[])
  const getData=async()=>{
    const response=await fetch("http:%20.244.56.144/test/companies/:companyname/categories/:categoryname/products?top=n&minPrice=p&maxPrice=q");
    console.log(response);
    const jsonData=await response.json();
    console.log(jsonData);
    setData(jsonData);
  }
  return(
    
    <div>
      <h1>TOP 10 PRODUCTS</h1>
      <div className='text'>
        {data.map((values)=>{
          return(
            <div>
              <h5>{values.prices}</h5>
            </div>
          )
        })}
      </div>
    </div>
  )
}


export default App;

