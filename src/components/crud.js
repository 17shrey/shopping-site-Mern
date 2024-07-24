import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

const Crud = () => {

    const [cruds, setCruds] = useState([]);
    const [crud, setCrud] = useState({
        first_name: "",
        last_name: "",
        address: "",
        adhar_no: ""
    });


    useEffect(() => {
        fetchData();
    }, []);

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        console.log(e);

        setCrud({ ...crud, [name]: value });
    };


    const fetchData = async () => {
        try {
            const response = await fetch("/showcrud");
            const data = await response.json();
            setCruds(data);
        } catch (error) {
            console.log("Error:", error);
        }
    };

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
    useEffect(()=>{
        savedData();
    },[])

    const savedData = async (id) => {
        const response = await fetch("/update/"+id)
    }

    const deleteData = async (id) => {
        try {
            const response = await fetch(`/crud/` + id, {
                method: "delete"
            });
            window.alert("are you sure you want to delete.")
            console.log(response.data);
                if (response.status === 201) {
                    console.log('Delete request successful');
                    
                    window.location.href = '/crudpage'
                } else {
                    console.log('Error: ', response.data.error);
                }
            
        } catch (error) {
            console.error('Error during delete request: ', error);
        }
    }

    const updateData = async (id) => {
        const response = await fetch("/updatecrud/" + id, {
            method: "get"
        })


    }


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
                                                onChange={handleInputs}
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
                                                    value="Save"
                                                    id="btnSaveCategory"
                                                    className="btn btn-success btn-sm btn-block"
                                                />


                                            </p>
                                        </div>
                                    </form>
                                </div>
                                <b><hr /></b>
                                <div className="col-md-7">
                                    <center>
                                        <h1>Enrolled Member's</h1>
                                    </center>
                                    <table className="table">

                                        <thead>

                                            <tr>
                                                <th scope="col">First Name</th>
                                                <th scope="col">Last Name</th>
                                                <th scope="col">Address</th>
                                                <th scope="col">Adhar No</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {cruds.map((s) => {
                                                return (

                                                    <tr>
                                                        <td>{s._id}</td>
                                                        <td>{s.first_name}</td>
                                                        <td>{s.last_name}</td>
                                                        <td>{s.address}</td>
                                                        <td>{s.adhar_no}</td>

                                                        <td>
                                                            {/* <input
                                                            type="submit"
                                                            // onClick={()=>updateData(s._id)}
                                                            value="Update"
                                                            href="/update"
                                                            id="btnSaveCategory"
                                                            className="btn btn-warning btn-sm btn-block"
                                                        /> */}
                                                            <Link 
                                                            to={`/update/${s._id}`}
                                                              className=" btn btn-warning">
                                                                Update

                                                            </Link>
                                                            {/* <a type="submit"
                                                                onClick={() => deleteData(s._id)}  id={s._id} className=" btn btn-danger">
                                                                Delete
                                                            </a> */}

                                                            <input
                                                                type="submit"
                                                                onClick={() => deleteData(s._id)}
                                                                value="delete"
                                                                id={s._id}
                                                                className="btn btn-danger btn-sm btn-block"
                                                            />
                                                        </td>

                                                    </tr>
                                                )
                                            })}

                                        </tbody>
                                    </table>

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
