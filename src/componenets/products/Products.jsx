import React from "react";
import "./Products.css";

const Products = ({ products }) => {
  return (
    <div class="row">
      {products.map((elm) => {
        return (
          <div class=" col-lg-3 col-md-6 col-sm-6 ">
            <div class="card card_height ">
              <img
                // class="card-img-top"
                src={elm.image}
                style={{ cursor: "pointer" }}
                className="product_img"
              />
              <div>
                <h4
                  class="card-text"
                  style={{ color: "#0F1111", fontWeight: "500" }}
                >
                  {elm.category}
                </h4>
              </div>

              <p
                class="card-title"
                style={{
                  color: "#8E1111",
                  fontWeight: "100",
                  fontSize: "18px",
                  // height: "120px",
                }}
              >
                {" "}
                {elm.title}
              </p>
              <p
                class="card-price"
                style={{ color: "#0F1111", fontWeight: "800", height: "30px" }}
              >
                Price: {elm.price}
              </p>
              {/* <p class="card-title"> {elm.description} </p> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
