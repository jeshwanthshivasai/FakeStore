import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h2 className="product-title">{product.title.substring(0, 20)}</h2>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <p className="product-category">Category: {product.category}</p>
      <p className="product-description">
        {product.description.substring(0, 50)}...
      </p>
      <p className="product-rating">
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </p>
    </div>
  );
};

export default ProductCard;
