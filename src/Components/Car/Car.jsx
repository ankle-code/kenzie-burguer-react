import React from "react";
import CarProduct from "../CarProduct/CarProduct";

class Car extends React.Component {
  render() {
    const { carList, removeItem, total } = this.props;
    return (
      <div>
        <h1>
          Carrinho de compras - <b className="Total">Total: R${total}</b>
        </h1>
        <div className="Container">
          {carList.map((product, ind) => (
            <CarProduct
              id={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
              position={ind}
              key={ind}
              removeItem={removeItem}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Car;
