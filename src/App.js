import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componenets/header/Header";
import SideNav from "./componenets/sideNav/SideNav";
import Products from "./componenets/products/Products";
import axios from "axios";
import { useState, useEffect } from "react";
import NavLeft from "./componenets/navLeft/NavLeft";

function App() {
  const [products, setProducts] = useState([]);
  // const [data, setData] = useState(products);
  // const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  // ==================SEARCH___ITEMS===============

  const searchItems = (searchValue) => {
    const filteredData = products.filter((item) => {
      return item.category.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredResults(filteredData);
  };
  // =================FETCH__PRODUCTS===========

  const getUsers = async () => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      const products = res.data;
      setProducts(products);
      setFilteredResults(products);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);
  // ==============FILTER_BY_CATEGORY===========

  const filterResult = (item) => {
    const result = products.filter((curData) => {
      return curData.category === item;
    });

    setFilteredResults(result);
  };

  // ===============GET_ALL_PRODUCTS===========

  const getAllProducts = (item) => {
    setFilteredResults(products);
  };

  return (
    <div className="App">
      <Header products={products} searchItems={searchItems} />
      <div class="row">
        <div class="col-sm-2">
          <NavLeft
            products={products}
            filterResult={filterResult}
            getAllProducts={getAllProducts}
            setFilteredResults={setFilteredResults}
          />
        </div>
        <div class="col-sm-1"></div>
        <div class="col-sm-9">
          <Products products={filteredResults} />
        </div>
      </div>
    </div>
  );
}

export default App;
