import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./Favourites.css";
import { connect } from "react-redux";
import { removeFromFavourites } from "../../redux/favourites/FavouritesActions";

const Favourites = (props) => {
  return (
    <Layout>
      <div
        className={`favourites-page container-fluid container-min-max-width d-flex flex-column 
          ${
            props.products.length
              ? ""
              : " justify-content-center align-items-center"
          }`}
      >
        {props.products.length > 0 && <h2 className="ml-2">Favourites</h2>}
        {props.products.length ? (
          <div className="w-100">
            <div className="row justify-content-center">
              {props.products.map((product) => {
                return (
                  <div className="m-2" key={product.id}>
                    <div
                      className="card"
                      style={{ width: "14rem", height: "100%" }}
                    >
                      <Link
                        className="d-flex flex-column h-100"
                        to={"product/" + product.id}
                      >
                        <div className="d-flex justify-content-center">
                          <img
                            src={product.image}
                            className="card-img-top flex-grow-1"
                            alt="..."
                          />
                        </div>
                        <h5 className="card-title p-2">{product.name}</h5>
                      </Link>
                      <div className="p-2 d-flex flex-column">
                        <button
                          className="btn btn-danger"
                          onClick={(e) => {
                            e.stopPropagation();
                            props.removeFromFavourites({ id: product.id });
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="d-flex flex-column align-items-center">
            <p className="h3">Your list of favourites is empty!</p>
            <Link to="/">
              <button className="btn btn-outline-dark">Back to home</button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.favourites.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromFavourites: (payload) => dispatch(removeFromFavourites(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
