import React, { useEffect, useState } from "react";
import Navbar from "./navbar";

const CategoryApi = () => {
    const [cats, setCategories] = useState([]);
    const [cat, setCategory] = useState({ name: "" });


    useEffect(() => {
        fetchCategories();
    }, []);

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        console.log(e);

        setCategory({ ...cat, [name]: value });
    };


    const fetchCategories = async () => {
        try {
            const response = await fetch("/categories");
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    const postData = async (e) => {
        console.log("category saving in progress");
        e.preventDefault();
        const { name } = cat;
        const rest = await fetch("/categoryinsert", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
            }),
        });
        const data = await rest.json();
        if (data.status === 422 || !data) {
            window.alert("Category could not be saved");
        } else {
            window.alert("Category saved Successfull");
            window.location.href='/categoryapi'
        }
    };

    const deleteData = async (e) => {
        e.preventDefault();
        const { name } = cat;

        var checkWithUser = window.confirm("Are you sure you want to delete?");
        if (checkWithUser) {
            const rest = await fetch("/categorydelete", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                }),
            });
            const data = await rest.json();
            if (data.status === 422 || !data) {
                window.alert("Category could not be deleted");
            } else {
                window.alert("Category deleted Successfull");
                window.location.href='/categoryapi'
            }
        } else {
            window.alert("Operation rolledback, Your data is save with us");
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
                                                name="name"
                                                value={cat.name}
                                                onChange={handleInputs}
                                                placeholder="Enter Category"
                                                required="required"
                                            />
                                        </div>

                                        <hr />
                                        <div className="form-outline mb-3">
                                            <p className="small">
                                                <input
                                                    type="submit"
                                                    onClick={postData}
                                                    value="Save"
                                                    id="btnSaveCategory"
                                                    className="btn btn-success btn-sm btn-block"
                                                />
                                                <input
                                                    type="submit"
                                                    onClick={deleteData}
                                                    value="Delete"
                                                    id="btnDeleteCategory"
                                                    className="btn btn-danger btn-sm btn-block"
                                                />
                                            </p>
                                        </div>
                                        <div>
                                            <ul className="list-group">
                                                {cats.map((s) => {
                                                    return (
                                                        <li
                                                            className="list-group-item d-flex justify-content-between align-items-center"
                                                            key={s.id}
                                                        >
                                                            <a
                                                                href="#"
                                                                className="list-group-item list-group-item-action"
                                                            >
                                                                {s.name}
                                                            </a>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        </div>
    );
};

export default CategoryApi;
