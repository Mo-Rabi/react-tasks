import React, { Component } from "react";
import Child from "../Child/Child";
class Parent extends Component {
  state = {
    userName: "Mo",
    age: 23,
    products: [
      {
        title: "Dell G15",
        price: 32000,
        category: "Laptops",
      },
      {
        title: "HP",
        price: 22000,
        category: "Laptops",
      },
      {
        title: "Lenovo",
        price: 18500,
        category: "Laptops",
      },
      {
        title: "Apple",
        price: 88500,
        category: "Laptops",
      },
      {
        title: "Acer",
        price: 28500,
        category: "Laptops",
      },
    ],
  };
  //! **************** Update Price ********************
  updatePrice = (itemIndex) => {
    //using arrow function so it points to global scope
    console.log("Hello from Update price", itemIndex);
    //? to update state: 1. take copy of state
    let products = [...this.state.products];
    //!? 2. make the required updates
    products[itemIndex].price += 10;
    //!?. setState
    this.setState({ products });
  };
  //! ******************** Delete product *********************
  deleteProduct = (itemIndex) => {
    console.log("Hello from detele product", this.state.products[itemIndex]);
    //? to update state: 1. take copy of state
    let products = [...this.state.products];
    //?2. make the required updates: Delete the product
    products.splice(itemIndex, 1);
    //?3. setState
    this.setState({ products });

    //? 4. Store the updated products array in local storage
    localStorage.setItem("products", JSON.stringify(products));
  };
  //!  ******************** Add product ********************
  addProduct = () => {
    const newProduct = {
      title: "Samsung vevo",
      price: 100,
      category: "Laptops",
    };

    //? to update state: 1. take copy of state
    const products = [...this.state.products];

    //!? 2. make the required updates: Add the new product to the array
    products.push(newProduct);

    //?3. setState
    this.setState({ products });

    //? 4. Store the updated products array in local storage
    localStorage.setItem("products", JSON.stringify(products));
  };

  componentDidMount() {
    // Retrieve the products array from local storage
    const storedProducts = localStorage.getItem("products");

    // If there are stored products, parse the JSON string and update the state
    if (storedProducts) {
      this.setState({ products: JSON.parse(storedProducts) });
    }
  }

  //!  ******************** Render ********************
  render() {
    return (
      <div className="bg-danger p-3">
        <h1>Parent</h1>
        <button className="btn btn-success" onClick={this.addProduct}>
          Add Product
        </button>
        <div class="row row-cols-1 row-cols-md-5">
          {this.state.products.map((product, index) => (
            <Child
              productDetails={product}
              key={index}
              index={index}
              updatePriceHandler={this.updatePrice}
              deleteProductHandler={this.deleteProduct}
              products={this.state.products}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Parent;
