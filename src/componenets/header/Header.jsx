import React from "react";

const Header = ({ searchItems }) => {
  return (
    <div>
      <nav class="navbar navbar-light" style={{ backgroundColor: "#232F3E" }}>
        <div class="container-fluid">
          <a class="navbar-brand " style={{ color: "white" }}>
            Navbar
          </a>

          <form class="d-flex">
            <input
              className="form-control me-2 search"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => searchItems(e.target.value)}
            />
            <button
              class="btn btn-outline-success"
              style={{ backgroundColor: "white", color: "grey" }}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
