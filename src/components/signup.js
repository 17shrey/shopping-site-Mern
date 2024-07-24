import React, { useState } from 'react'



const Signup = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: "",
        cpassword: ""
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
        const { name, email, phone, work, password, cpassword } = user;
        const rest = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                work,
                password,
                cpassword,
            }),
        });

        
        const data = await rest.json();
        if (data.status === 422 || !name ) {
            window.alert("Registration failed, Please fill all fields.");
            console.log("Registration failed, Please fill all fields.");
            document.getElementById("emptyalert").innerHTML = " Username must be filled. ";            
            document.getElementById("emptyalert").style.color = 'red';
            
        }if (data.status === 422 || !email ) {
            document.getElementById("emptyalert1").innerHTML = " Email must be filled. ";
            document.getElementById("emptyalert1").style.color = 'red'

        }if (data.status === 422 || !phone ) {
            document.getElementById("emptyalert2").innerHTML = " Phone nnumber must be filled. ";
            document.getElementById("emptyalert2").style.color = 'red';

        }if (data.status === 422 || !work ) {
            document.getElementById("emptyalert3").innerHTML = " Work must be filled. ";
            document.getElementById("emptyalert3").style.color = 'red';
            
        }if (data.status === 422 || !password ) {
            document.getElementById("emptyalert4").innerHTML = " Password must be filled ";
            document.getElementById("emptyalert4").style.color = 'red';
            
        }if (data.status === 422 || !cpassword ) {
            document.getElementById("emptyalert5").innerHTML = " confirm password must be filled. ";
            document.getElementById("emptyalert5").style.color = 'red';
        }
    
        else if (document.getElementById("email").value.indexOf("@") === -1) {
            document.getElementById("emailalert").innerHTML = "Not a valid email.";
            document.getElementById("emailalert").style.color = 'red';

        }
        else if (password !== cpassword) {
            window.alert("password and confirm password must be same");
            console.log(" password and confirm password must be same");
            document.getElementById("passalert").innerHTML = " Password and confirm password must be same ";
            document.getElementById("passalert").style.color = 'red';

        }
        
        else {
            window.alert("Registration Successfull");
            console.log("Registration Successfull");
            window.location.href = "http://localhost:3000/login";
        }
    };


    return (
        <>
            <div>
                <section
                    id="backgroundpic"
                    className=" bg-image"
                    style={{
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1200&ixid=MnwxfDB8MXxyYW5kb218MHx8c2hvcHBpbmd8fHx8fHwxNjgxNDg3MTU1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1700")',
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <div className="mask d-flex align-items-center">
                        <div className="container ">
                            <div className="row d-flex justify-content-center align-items-center my-5 h-100">
                                <div className="col-12 col-md-9 col-lg-7 col-xl-5">
                                    <div className="card bg-dark text-white" style={{ borderRadius: 20 }}>
                                        <form>
                                            <div className="card-body p-5">
                                                <center>
                                                    <h2 className="fw-bold mb-5 text-uppercase">
                                                        Create an account
                                                    </h2>
                                                </center>
                                                <div className="form-outline form-white mb-4">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-lg"
                                                        id="name"
                                                        name="name"
                                                        placeholder="Create a Username"
                                                        required="required"
                                                        value={user.name}
                                                        onChange={handleInputs}
                                                    />
                                                    <lable for="name" id='emptyalert'> </lable>
                                                </div>
                                                <div className="form-outline form-white mb-4">
                                                    <input
                                                        type="email"
                                                        className="form-control form-control-lg"
                                                        id="email"
                                                        name="email"
                                                        placeholder="Enter Your Email"
                                                        required="required"
                                                        value={user.email}
                                                        onChange={handleInputs}
                                                    />
                                                    <lable for="name" id='emptyalert1'> </lable>
                                                    <lable for="email" id='emailalert'> </lable>
                                                </div>
                                                <div className="form-outline form-white mb-4">
                                                    <input
                                                        type="number"
                                                        className="form-control form-control-lg"
                                                        id="phone"
                                                        name="phone"
                                                        placeholder="Enter Your Number"
                                                        required="required"
                                                        value={user.phone}
                                                        onChange={handleInputs}
                                                    />
                                                    <lable for="phone" id='emptyalert2'> </lable>
                                                </div>
                                                <div className="form-outline form-white mb-4">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-lg"
                                                        id="work"
                                                        name="work"
                                                        placeholder="Enter Your workplace"
                                                        required="required"
                                                        value={user.work}
                                                        onChange={handleInputs}
                                                    />
                                                    <lable for="work" id='emptyalert3'> </lable>
                                                </div>
                                                <div className="form-outline form-white mb-4">
                                                    <input
                                                        type="password"
                                                        className="form-control form-control-lg"
                                                        id="password"
                                                        name="password"
                                                        placeholder="Enter Password"
                                                        required="required"
                                                        value={user.password}
                                                        onChange={handleInputs}
                                                    />
                                                    <lable for="password" id='emptyalert4'> </lable>

                                                </div>
                                                <div className="form-outline form-white mb-5">
                                                    <input
                                                        type="password"
                                                        className="form-control form-control-lg"
                                                        id="cpassword"
                                                        name="cpassword"
                                                        placeholder="Confirm Password"
                                                        required="required"
                                                        value={user.cpassword}
                                                        onChange={handleInputs}

                                                    />
                                                    <lable for="cpassword" id='emptyalert5'> </lable>
                                                    <label for="cpassword" id="passalert"></label>
                                                </div>
                                                <div className="d-flex justify-content-center mt-5">
                                                    <input
                                                        type="submit"
                                                        className="btn btn-outline-light btn-lg px-6"
                                                        defaultValue="Sign Up"
                                                        onClick={postData}
                                                    />
                                                </div>
                                                <p className="text-center text-white mt-2 mb-0">
                                                    Have already an account?{" "}
                                                    <a href="/login" className="fw-bold">
                                                        <u>Login here</u>
                                                    </a>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
};

export default Signup
