import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [logout, setLogout] = useState(false);

  const logoutHandler = () => {
    setLogout(true);
  };

  const loginHandler = () => {
    setLogout(false);
  };

  return (
    <header className="navbar-light bg-light shadow">
      <nav className="navbar navbar-expand-lg  container">
        <div className="container-fluid">
          <h2>
            <span className="text-primary">Full</span>ness Recipes
          </h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Recipes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/add-recipes">
                  Add Recipes
                </NavLink>
              </li>
              {!logout ? (
                <button className="btn btn-danger" onClick={logoutHandler}>
                  Logout
                </button>
              ) : (
                <button className="btn btn-success" onClick={loginHandler}>
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
