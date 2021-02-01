import React from "react";
import "./style.css";

class Product extends React.Component {
  render() {
    const { id, name, category, price, image, handleClick } = this.props;
    return (
      <div className="Product">
        <img className="Product__Image" src={image} alt="fotu di cumida" />
        <h1 className="Product__Name">{name}</h1>
        <p>{category}</p>
        <p>Preço: R$ {price}</p>
        <button className="Product__Button" onClick={() => handleClick(id)}>
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

export default Product;
