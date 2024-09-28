// import React from 'react';
// import SearchBar from './Components/SearchBar';

// const App = () => {
//   return (
//     <>
//       {/* <h1>Hello, World!</h1> */}
//       <SearchBar />
//     </>
//   );
// };
// export default App;


import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import Counter from "./components/Counter";
import SearchBar from "./components/SearchBar";
import './index.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); // Initially show all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Handle search filtering
  useEffect(() => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [search, products]);

  return (
    <>
      <Header setSearch={setSearch} />
      <SearchBar setSearch={setSearch} />
      <div className="products-container">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Counter />
      <Footer />
    </>
  );
};

export default App;
