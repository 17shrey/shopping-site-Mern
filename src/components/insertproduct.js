import React, { useState } from 'react'
import Navbar from './navbar'






const Insertproduct = () => {
  //new
  // const [selectedValue, setSelectedValue] = useState("option1");
  // const [image, setImage] = useState(null);
  //end new
  const [prod, setUser] = useState({
    name: "",
    description: "",
    price: "",
    imagepath: "",
    category: "",
    quantity: ""
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    console.log(e);

    setUser({ ...prod, [name]: value });
    //new
    // setImage(e.target.files[0]);
    // setSelectedValue(e.target.value);
    //end new
  };

  const postData = async (e) => {
    console.log("registration in progress");
    e.preventDefault();
    const { name, description, price, imagepath, category, quantity } = prod;
    const rest = await fetch("/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        price,
        imagepath,
        category,
        quantity

      }),
    });



    const data = await rest.json();
    if (data.status == 422 || !data) {
      console.log(data)
      window.alert("product already exist.");
    } else {
      console.log(data)
      window.alert("product added succesfully");
      window.location.href = "/Showproduct";
    }
  }



  return (
    <div>
      <Navbar />

      <div className="mask d-flex align-items-center">
        <div className="container ">
          <div className="row d-flex justify-content-center align-items-center my-5 h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-5">
              <div className="card text-black" style={{ borderRadius: 20 }}>
                <form action="#!">
                  <div className="card-body p-5">
                    <center>
                      <h2 className="fw-bold mb-5 text-uppercase">
                        Add new product
                      </h2>
                    </center>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="name"
                        name="name"
                        placeholder="Add product name"
                        required="required"
                        value={prod.name}
                        onChange={handleInputs}
                      />
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="description"
                        name="description"
                        placeholder="Enter Your Description"
                        required="required"
                        value={prod.description}
                        onChange={handleInputs}
                      />
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="price"
                        name="price"
                        placeholder="Enter price"
                        required="required"
                        value={prod.price}
                        onChange={handleInputs}
                      />
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="imagepath"
                        name="imagepath"
                        placeholder="Enter Imagepath"
                        required="required"
                        value={prod.imagepath}
                        onChange={handleInputs}
                      />
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="category"
                        name="category"
                        placeholder="Enter category"
                        required="required"
                        value={prod.category}
                        onChange={handleInputs}
                      />
                    </div>
                    <div className="form-outline form-white mb-5">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="quantity"
                        name="quantity"
                        placeholder="Confirm quantity"
                        required="required"
                        value={prod.quantity}
                        onChange={handleInputs}

                      />
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                      <input
                        type="submit"
                        className="btn btn-outline-dark btn-lg px-6"
                        defaultValue="Sign Up"
                        onClick={postData}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>




    </div>
  )
}

export default Insertproduct
