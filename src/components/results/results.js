
import { useEffect } from "react";
import './results.css'
const Results = () => {
  let history = [];
 

    if(localStorage.history){
      history = localStorage.history.split(',');
    } else {
      history = [];
    }
   
  
  return (
   <div className="center">
    <h1>HISTORY</h1>
    {history.reverse().map( (value, index) => {
      console.log(history);
      return (<p key={index}><a href={value} target="_blank" rel="noreferrer" >{value}</a> <hr></hr></p>)
    })}
   </div>
  );
};

export default Results;
