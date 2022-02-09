import "./navLeft.css";
import { useState } from "react";

const NavLeft = ({
  filterResult,
  getAllProducts,
  products,
  setFilteredResults,
}) => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  // =============HANDLE_INPUT_MAX============

  const handleInputMax = (e) => {
    console.log(e.target.value);
    setMax(e.target.value);
  };

  // ===============HANDLE_INPUT_MIN=============

  const handleInputMin = (e) => {
    console.log(e.target.value);
    setMin(e.target.value);
  };

  // =================FORM_ON_SUBMIT================

  const onSubmit = (e, min, max) => {
    e.preventDefault();
    const minMaxResult = products.filter((item) => {
      return item.price >= min && item.price <= max;
    });

    setFilteredResults(minMaxResult);
  };
  return (
    <div>
      <div class="sidebar side">
        <a href="#products" onClick={getAllProducts}>
          Products
        </a>
        <a href="#men" onClick={() => filterResult("men's clothing")}>
          Men
        </a>
        <a href="#women" onClick={() => filterResult("women's clothing")}>
          Women
        </a>
        <a href="#jewlery" onClick={() => filterResult("jewelery")}>
          Jewelery
        </a>
        <a href="#electronics" onClick={() => filterResult("electronics")}>
          Electronics
        </a>
        <form className="pricing" onSubmit={(e) => onSubmit(e, min, max)}>
          <input
            type="number"
            placeholder="Min"
            className="min"
            value={min}
            name="min"
            onChange={handleInputMin}
          ></input>
          <input
            type="number"
            placeholder="Max"
            className="min"
            value={max}
            name="max"
            onChange={handleInputMax}
          ></input>
          <button className="btn_apply">Apply</button>
        </form>
      </div>
    </div>
  );
};

export default NavLeft;
