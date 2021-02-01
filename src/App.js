import "./App.css";
import React from "react";
import MenuContainer from "./Components/MenuContainer/MenuContainer";

class App extends React.Component {
  state = {
    products: [
      {
        id: 1,
        name: "Hamburguer",
        category: "Sanduíches",
        price: 7.99,
        image:
          "https://images.rappi.com.br/products/1207a014-5054-4b0c-bf30-422e29ce78f1-1590859975388.png?d=128x90",
      },
      {
        id: 2,
        name: "X-Burguer",
        category: "Sanduíches",
        price: 8.99,
        image:
          "https://images.rappi.com.br/products/df628689-0f79-49fb-9bbc-b864dbc2a534-1597951695201.jpeg?d=128x90",
      },
      {
        id: 3,
        name: "X-Salada",
        category: "Sanduíches",
        price: 10.99,
        image:
          "https://images.rappi.com.br/products/ff525dca-2e2b-4dd1-8990-6e827474c444-1602795193831.jpeg?d=128x90",
      },
      {
        id: 4,
        name: "Big Kenzie",
        category: "Sanduíches",
        price: 16.99,
        image:
          "https://img.r7.com/images/2014/01/23/2vk7i6koqz_21jk3sxj5q_file.jpg",
      },
      {
        id: 5,
        name: "Guaraná",
        category: "Bebidas",
        price: 4.99,
        image:
          "data:image/jpeg;base64,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",
      },
      {
        id: 6,
        name: "Coca",
        category: "Bebidas",
        price: 4.99,
        image:
          "https://www.padariamadrigal.com.br/web/image/product.template/399/image_256/Refrigerante%20Coca%20Coca%20350ml?unique=e573c76",
      },
      {
        id: 7,
        name: "Fanta",
        category: "Bebidas",
        price: 4.99,
        image:
          "https://padarianutrivida.com.br/web/image/product.template/3117/image_256/%5B3519%5D%20Refrigerante%20Fanta%20Laranja%20220%20Ml?unique=8e3bd13",
      },
    ],
    filteredProducts: [],
    currentSale: {
      total: 0,
      saleDetails: [],
    },
  };

  showProduct = (event) => {
    const { products } = this.state;
    const text = event.target.value;
    const regExp = new RegExp([text.toLowerCase()]);
    this.setState({
      filteredProducts: products.filter((product) =>
        regExp.test(product.name.toLowerCase())
      ),
    });
  };

  handleClick = (id) => {
    const {
      products,
      currentSale: { saleDetails },
    } = this.state;
    const clickedItem = products.find((product) => product.id === id);
    const totalValue = saleDetails
      .reduce((acc, cur) => acc + cur.price, clickedItem.price)
      .toFixed(2);
    this.setState({
      currentSale: {
        total: totalValue,
        saleDetails: [...saleDetails, clickedItem],
      },
    });
  };

  removeItem = (id) => {
    const {
      currentSale: { saleDetails },
    } = this.state;
    const updateArray = saleDetails.filter((product, ind) => ind !== id);
    const totalValue = updateArray
      .reduce((acc, cur) => acc + cur.price, 0)
      .toFixed(2);
    this.setState({
      currentSale: {
        saleDetails: updateArray,
        total: totalValue,
      },
    });
  };

  render() {
    const {
      products,
      filteredProducts,
      currentSale: { total, saleDetails },
    } = this.state;
    return (
      <div>
        <h1>Hamburgueria da Kenzie</h1>
        <input onChange={this.showProduct} placeholder="Procurar" />
        <MenuContainer
          productsList={
            filteredProducts.length > 0 ? filteredProducts : products
          }
          carList={saleDetails}
          handleClick={this.handleClick}
          removeItem={this.removeItem}
          total={total}
        />
      </div>
    );
  }
}

export default App;
