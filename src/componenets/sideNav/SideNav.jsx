import "./SideNav.css";

const SideNav = ({
  filterResult,
  getAllProducts,
  filterByPrice,
  filterByPriceGreater,
  priceGreaterThanHundred,
  filter_min,
  filter_max,
  priceHandler,
}) => {
  return (
    <div class="row">
      <div class="col-sm">
        <div>
          <div class="wrapper">
            {/* <!-- Sidebar  --> */}
            <nav id="sidebar">
              <div class="sidebar-header">
                <h3> Sidebar</h3>
              </div>

              <ul class="list-unstyled components">
                <div className="pricing">
                  <input
                    type="number"
                    placeholder="Min"
                    className="min"
                    onChange={(e) => filter_min(e.target.value)}
                  ></input>
                  <input
                    type="number"
                    placeholder="Max"
                    className="min"
                    onChange={(e) => filter_max(e.target.value)}
                  ></input>
                </div>
                <button className="btn" onClick={priceHandler}>
                  Apply
                </button>

                <li>
                  <a
                    href="#pageSubmenu"
                    data-toggle="collapse"
                    aria-expanded="false"
                    onClick={getAllProducts}
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#pageSubmenu"
                    data-toggle="collapse"
                    aria-expanded="false"
                    onClick={() => filterResult("men's clothing")}
                  >
                    Men's
                  </a>
                </li>
                <li>
                  <a
                    href="#pageSubmenu"
                    data-toggle="collapse"
                    aria-expanded="false"
                    onClick={() => filterResult("women's clothing")}
                    // class="dropdown-toggle"
                  >
                    Women's
                  </a>
                </li>
                <li>
                  <a
                    href="#pageSubmenu"
                    data-toggle="collapse"
                    aria-expanded="false"
                    onClick={() => filterResult("jewelery")}
                    // class="dropdown-toggle"
                  >
                    Jewelery
                  </a>
                </li>
                <li>
                  <a
                    href="#pageSubmenu"
                    data-toggle="collapse"
                    aria-expanded="false"
                    // class="dropdown-toggle"
                    // data={data}
                    onClick={() => filterResult("electronics")}
                  >
                    Electronics
                  </a>
                </li>

                {/* <li>
                    <a
                      href="#pageSubmenu"
                      data-toggle="collapse"
                      aria-expanded="false"
                      onClick={() => filterByPrice("price")}
                      // class="dropdown-toggle"
                    >
                      Price Less than Ten
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pageSubmenu"
                      data-toggle="collapse"
                      aria-expanded="false"
                      onClick={() => filterByPriceGreater("price")}
                      // class="dropdown-toggle"
                    >
                      Price Greater than Fifty
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pageSubmenu"
                      data-toggle="collapse"
                      aria-expanded="false"
                      onClick={() => priceGreaterThanHundred("price")}
                      // class="dropdown-toggle"
                    >
                      Price Greater than 100
                    </a>
                  </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideNav;
