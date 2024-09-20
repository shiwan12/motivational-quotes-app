
import React, {useState} from "react";
import ItemQuotes from "./ItemQuotes";

const App=()=> {
  const [items,setitems] =useState([])
  const fetchData = () => {
    return fetch('https://jsonguide.technologychannel.org/quotes.json') // Use fetch and correct URL format
      .then((response) => response.json()) // Correct promise chain
      .then((data) => { // Proper arrow function syntax
        setitems(data)
      })
      .catch((error) => console.error('Error fetching data:', error)); // Optional error handling
  }
  
  return (
    
    <div >
      <button onClick={()=>fetchData()} >Fetch </button>
     {items.map((item)=><ItemQuotes author={item.from} text={item.text}/>)}
    </div>
  );
}

export default App;
