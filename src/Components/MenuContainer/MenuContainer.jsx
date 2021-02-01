import React from "react";
import Product from "../Product/Product";
import Car from "../Car/Car";
import "./style.css";

class MenuContainer extends React.Component {
  render() {
    const {
      productsList,
      handleClick,
      removeItem,
      carList,
      total,
    } = this.props;
    return (
      <>
        <div className="Container">
          {productsList.map((product, ind) => (
            <Product
              id={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
              handleClick={handleClick}
              key={ind}
            />
          ))}
        </div>
        <Car carList={carList} removeItem={removeItem} total={total} />
      </>
    );
  }
}

export default MenuContainer;
