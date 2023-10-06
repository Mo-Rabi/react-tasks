import React, { Component } from "react";

class Child extends Component {
  render() {
    console.log(this.props);
    let { title, price, category } = this.props.productDetails;

    return (
      <div className="bg-warning m-3 p-3 rounded">
        <h2>Child</h2>
        <div className="bg-dark text-white">
          <h2>{title}</h2>
          <h2>{price}</h2>
          <h2>{category}</h2>
        </div>

        <button
          className="btn btn-success m-2"
          onClick={() => this.props.updatePriceHandler(this.props.index)}
        >
          Increase price
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => this.props.deleteProductHandler(this.props.index)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Child;
