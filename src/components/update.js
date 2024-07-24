import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import { useParams } from "react-router-dom";

const Crud = () => {
    const {id}=useParams
    const [crud, setCrud] = useState({
        id:id,
        first_name: "",
        last_name: "",
        address: "",
        adhar_no: ""
    });
    

    useEffect(()=>{
        savedData();
    },[])

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        console.log(e);

        setCrud({ ...crud, [name]: value });
    };
    
    const savedData = async (id) => {
        const response = await fetch("/update/"+id)
        
        

        setCrud(await response.json())
        console.log(response)
    }


    const postData = async (e) => {
        console.log("user saving in progress");
        e.preventDefault();
        const { first_name, last_name, address, adhar_no } = crud;
        const rest = await fetch("/usersave", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name,
                last_name,
                address,
                adhar_no,
            }),
        });
        const data = await rest.json();
        if (data.status === 422 || !data) {
            window.alert("Entry could not be saved");
        } else {
            window.alert("Entry saved Successfull");
            window.location.href = '/crudpage'
        }
    };

    


    return (
        <div>
            <Navbar />
            <>
                <div>
                    <section className="vh-100 my-4">
                        <div className="container-fluid h-custom">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                    <form  >
                                        <div className="form-outline mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="first_name"
                                                value={crud.first_name}
                                                // onChange={e=>setCrud{...Crud,name: e.target.value}}
                                                placeholder="Enter First name"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-outline mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="last_name"
                                                value={crud.last_name}
                                                onChange={handleInputs}
                                                placeholder="Enter Last name"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-outline mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="address"
                                                value={crud.address}
                                                onChange={handleInputs}
                                                placeholder="Enter Address"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-outline mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="adhar_no"
                                                value={crud.adhar_no}
                                                onChange={handleInputs}
                                                placeholder="Enter Adhar No"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-outline mb-3">
                                            <p className="small text-center">
                                                <input
                                                    type="submit"
                                                    onClick={postData}
                                                    value="Update"
                                                    id="btnSaveCategory"
                                                    className="btn btn-success btn-sm btn-block"
                                                />


                                            </p>
                                        </div>
                                    </form>
                                </div>
                                

                            </div>
                        </div>
                    </section>
                </div>
            </>
        </div >
    );
};

export default Crud;
