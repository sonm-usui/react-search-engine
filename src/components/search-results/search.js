import { useEffect, useState } from "react"
import "./search.css"
const Search = (props) => {
 let history;
   
    const addToHistory = (url) => {
       history.push(url);
       localStorage.setItem('history', history.join());
    }
    useEffect( () => {
        if(localStorage.history){
            history = localStorage.history.split(',');
         } else {
           history = [];
         }
    }, []);

    return (
        <div className="content">
            {props.results.map( (value, index) => {
                return (
                    <div key={index}>
                <h3><a href={value.url} target="_blank" rel="noreferrer" onClick={ () => addToHistory(value.url)}>{value.name}</a></h3>
                <p><a href={value.url} target="_blank" rel="noreferrer" >{value.snippet}</a></p>
                {
                    value.displayUrl.includes('youtube') ? <video width="320" height="240" controls>
                    <source src={value.displayUrl} type="video/mp4"/>
                  </video> : ''
                }
                </div>
                )
            })}
        </div>
    )
}

export default Search;