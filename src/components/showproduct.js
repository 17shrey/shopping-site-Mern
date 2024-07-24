import Navbar from "./navbar";
import React, { useState, useEffect } from "react";
// import image from '../images/imageone.jpg'

const Showproduct = () => {
  const [cats, setCategories] = useState([]);

  const [prods, setProducts] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  const getCategories = async () => {
    const response = await fetch("/categories");
    setCategories(await response.json());
  };


  const getProducts = async () => {
    const response = await fetch("/products");
    setProducts(await response.json());
  };

  const filterproduct = async (param) => {
    const rest = await fetch("/productsBasedOnName/" + param);
    setProducts(await rest.json());
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2 p-2">
            <header>
              {/* Sidebar */}
              <nav
                id="sidebarMenu"

                className="collapse d-lg-block sidebar collapse bg-white"
              >

                <div className="position-sticky">
                  <div style={{ border: "1px solid black" }} className="list-group list-group-flush mx-3 mt-4">
                    <a
                      onClick={() => filterproduct("All")}
                      className="list-group-item list-group-item-action active"
                      aria-current="true"
                    >
                      <i className="fas fa-tachometer-alt fa-fw me-3" />
                      <span>All</span>
                    </a>
                    {cats.map((s, index) => {
                      return (
                        <a
                          onClick={() => filterproduct(s.name)}
                          className="list-group-item list-group-item-action py-2 ripple"
                          aria-current="true"
                        >
                          <i className="fas fa-tachometer-alt fa-fw me-3" />
                          <span>{s.name}</span>
                        </a>
                      );
                    })}

                  </div>
                  <div className="mx-3 mt-4" style={{ border: "1px solid black", width: "13rem", height: "180px" }}>
                    <div className="card-body"style={{ marginTop:30, marginLeft:19 }}>
                      <h4 className="card-title">CLICK HERE TO ADD PRODUCT</h4>

                      <a href='/categoryapi'style={{ marginTop:15, marginLeft:17 }} className="btn btn-success">
                        ADD PRODUCT
                      </a>

                    </div>

                  </div>
                </div>
              </nav>
            </header>
          </div>

          <div className="col sm-5 text-center">
            <main >
              <div className="card">
                <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  {prods.map((s) => (

                    <div className="card col-sm-3 mx-4 my-4" style={{ border: "1px solid black", width: "16rem", height: "500px" }}>
                      <div className="card-body">
                        <h4 className="card-title">{s.name}</h4>

                        <img
                          style={{ width: "100%", height: 250 }}
                          src={s.imagepath}
                          alt={s.name}
                          className="img-fluid"
                        />
                        <p className="card-text"><b>{s.description}</b></p>

                        <a
                          style={{ color: "red" }}
                          colour=' dark blue'>
                          <b>
                            Price:
                          </b>
                          {s.price}
                        </a>


                      </div>
                      <a href="#" className="btn btn-success">
                        Buy Now
                      </a>
                      <a href="#" className="btn btn-info my-2">
                        Add to cart
                      </a>
                    </div>

                  )
                  )}
                  <div className="card col-sm-3 mx-4 my-4" style={{ border: "1px solid black", width: "16rem", height: "500px" }}>
                    <div className="card-body">
                      <h4 className="card-title" style={{ marginTop: 150 }}>CLICK HERE TO ADD NEW PRODUCT</h4>

                      <a href='/insertproduct' className="btn btn-success">
                        ADD PRODUCT
                      </a>

                    </div>

                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

    </>
  );
};

export default Showproduct;
