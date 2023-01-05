import React, { useState } from "react";
import "./home.css";
import { Form, Field } from "react-final-form";
import Search from '../search-results/search'


const Home = (props) => {
  const [results, setResult] = useState([]); 

  const onSubmit = (events) => {
    const options = {
      method: "GET",
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "f01f620cabmsh14f0b90f280c52fp124b07jsn65de4e6e0870",
        "X-RapidAPI-Host": "bing-web-search1.p.rapidapi.com",
      },
    };

    fetch(`https://bing-web-search1.p.rapidapi.com/search?q=${events.search}`, options)
      .then((response) => response.json())
      .then((response) => {
         setResult(response.webPages.value);
      })
      .catch((err) => console.error(err));
  }

  return (
    <React.Fragment>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <div className="contenedor">
            <div className="busqueda">
              <form onSubmit={handleSubmit}>
                <Field
                  name="search"
                  component="input"
                  placeholder="Search..."
                  className="search"
                />
              </form>
            </div>
          </div>
        )}
      />
     {
      results.length > 0 ? <Search results={results}></Search> : ''
     }
    
    </React.Fragment>
  );
};

export default Home;
