import React, { useState } from 'react'
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        console.log(e);

        setUser({ ...user, [name]: value });
    };

    const postData = async (e) => {
        console.log("registration in progress");
        e.preventDefault();
        const { email, password } = user;

        const rest = await fetch("/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        const data = await rest.json();
        // if (data.status === 422 || !data) {
        //     console.log(data)
        //     window.alert(data.message);
        //     sessionStorage.setItem("LoginName", email);
        //     window.location.href = "/login";
        // } else {
        //     // window.alert("sucess");
        //     window.location.href="/";
        // }

        const isLoggedIn = data.message;
        if (isLoggedIn == "User logged in successfully.") {
            window.alert(isLoggedIn);
            sessionStorage.setItem("LoginName", email);
            window.location.href = "/todaysdeals";
        } else {
            window.alert(isLoggedIn);
        }

    };





    return (
        <div>
            <section className="vh-100" style={{ backgroundColor: "orange" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: "1rem" }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img
                                            src="https://images.unsplash.com/photo-1555529771-4f81423a1207?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8c2hvcHBpbmd8fHx8fHwxNjgxNDg1MDgy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=700"
                                            alt="login form"
                                            className="img-fluid"
                                            style={{ borderRadius: "1rem 0 0 1rem" }}
                                        />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">

                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <i
                                                        className="fas fa-cubes fa-2x me-3"
                                                        style={{ color: "#ff6219" }}
                                                    />
                                                    <span className="h1 fw-bold mb-0">Shopeasy</span>
                                                </div>
                                                <h5
                                                    className="fw-normal mb-3 pb-3"
                                                    style={{ letterSpacing: 1 }}
                                                >
                                                    Sign into your account
                                                </h5>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        {...register("email", { required: true })}
                                                        type="email"
                                                        id="name"
                                                        name="email"
                                                        value={user.email}
                                                        onChange={handleInputs}
                                                        placeholder="Username"
                                                        className="form-control form-control-lg"
                                                    />
                                                    <label>
                                                        {errors.exampleRequired && <span>This field is required</span>}
                                                    </label>

                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        {...register("password", { required: true })}
                                                        type="password"
                                                        id="password"
                                                        value={user.password}
                                                        onChange={handleInputs}
                                                        placeholder="Password"
                                                        className="form-control form-control-lg"
                                                    />
                                                </div>
                                                <div className="pt-1 mb-4">
                                                    <button
                                                        className="btn btn-dark btn-lg btn-block"
                                                        type="button"
                                                        onClick={postData}
                                                    >
                                                        Login
                                                    </button>
                                                </div>
                                                <a className="small text-muted" href="#!">
                                                    Forgot password?
                                                </a>
                                                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                                                    Don't have an account?{" "}
                                                    <a href="/signup" style={{ color: "#393f81" }}>
                                                        Register here
                                                    </a>
                                                </p>
                                                <a href="#!" className="small text-muted">
                                                    Terms of use.
                                                </a>
                                                <a href="#!" className="small text-muted">
                                                    Privacy policy
                                                </a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Login
