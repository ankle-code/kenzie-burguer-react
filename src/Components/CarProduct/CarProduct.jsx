import React from "react";

class CarProduct extends React.Component {
  render() {
    const {
      id,
      position,
      name,
      category,
      price,
      image,
      removeItem,
    } = this.props;
    return (
      <div className="Product">
        <img className="Product__Image" src={image} alt="fotu di cumida" />
        <h1 className="Product__Name">{name}</h1>
        <p>{category}</p>
        <p>Preço: R$ {price}</p>
        <button
          className="Product__Button Product__Button--Remove"
          onClick={() => removeItem(position)}
        >
          Remover do Carrinho
        </button>
      </div>
    );
  }
}

export default CarProduct;
