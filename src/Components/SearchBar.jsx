import React, { useState, useEffect } from 'react';
import '../Styles/SearchBar.css';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <input
          type="search"
          name="src"
          placeholder="Search for products"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      {
        data
          .filter((row) => {
            if (search === '') {
              return row;
            } else if (
              row.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return row;
            }
          })
          .map((row, i) => {
            return (
              <div className="card" key={i}>
                <div className="image">
                  <img src={row.image} alt={row.title} />
                </div>
                <div className="title">
                  <h2>{row.title.substring(0, 20)}</h2>
                  <p>${row.price}</p>
                </div>
              </div>
            );
          })
      }
    </div>
  );
};

export default SearchBar;
