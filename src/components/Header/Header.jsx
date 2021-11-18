import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo2.png";
import "./Header.css";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/user/UserActions";

const Header = (props) => {
  return (
    <header className="border-bottom mb-3">
      <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center flex-wrap">
        <Link to="/" className="my-3">
          <img src={Logo} alt="Sirluggia Shop" className="logo" />
        </Link>
        <div className="d-flex align-items-center">
          {props.user ? (
            <div className="d-flex align-items-center">
              <span className="mr-1">Salut, {props.user.displayName}!</span>
              <button
                className="btn logout-btn h5 mb-0"
                onClick={() => props.signOut()}
              >
                <i className="bi bi-box-arrow-left mr-1"></i>
                Delogare
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn login-link h5 mb-0 pt-2 pb-2 pl-4 pr-4"
            >
              Log in
            </Link>
          )}
          <Link to="/favourites" className="btn fav-button ml-3 mr-1 p-1">
            <i className="bi bi-heart-fill"></i>
            <span className="favourite-count ml-1 mb-0">
              {props.numberOfFavourites}
            </span>
          </Link>

          <Link to="/cart" className="btn cart-btn p-1">
            <i className="bi bi-cart-fill"></i>
            <span className="cart-count ml-1 mb-0">
              {props.numberOfProducts}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

function mapStateToProps(state) {
  return {
    numberOfProducts: state.cart.products.length,
    numberOfFavourites: state.favourites.products.length,
    user: state.user.data,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    signOut: () => dispatch(logoutUser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
