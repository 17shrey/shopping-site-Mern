import Navbar from "./navbar";
import React, { useState, useEffect } from "react";

const Cloths = () => {
  const [gender, setGender] = useState([]);
  const [cloth, setCloth] = useState([]);

  useEffect(() => {
    getGender();
  }, []);

  useEffect(() => {
    getCloth();
  }, []);

  const getGender = async () => {
    const data = await fetch("/showgender");
    setGender(await data.json());
  };

  const getCloth = async () => {
    const data = await fetch("/showcloth");
    setCloth(await data.json());
  };

  const filterproduct = async (param) => {
    const rest = await fetch("/clothsBasedOnName/" + param);
    setCloth(await rest.json());
    
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
                    {gender.map((s, index) => {
                      return (
                        <a
                          onClick={() => filterproduct(s.Name)}
                          className="list-group-item list-group-item-action py-2 ripple"
                          aria-current="true"
                        >
                          <i className="fas fa-tachometer-alt fa-fw me-3" />
                          <span>{s.Name}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </nav>
            </header>
          </div>

          <div className="col sm-5 text-center">
            <main >
              
              <div className="card">
               
                <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  {cloth.map((s) => (

                    <div className="card col-sm-3 mx-4 my-4" style={{ border: "1px solid black", width: "16rem", height: "500px" }}>
                      <div className="card-body">
                        
                        <img
                          style={{ width: "100%", height: 250 }}
                          src={s.image}
                          alt={s.Name}
                          className="img-fluid"
                        />
                        <h4 className="card-text">{s.Name}</h4>
                        <p className="card-text"><b>Size: </b>{s.Size}</p>


                        <a
                          style={{ color: "red" }}
                          colour=' dark blue'>
                          <b>
                            Price:
                          </b>
                          {s.Price}
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
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      
    </>

  )
}

export default Cloths
