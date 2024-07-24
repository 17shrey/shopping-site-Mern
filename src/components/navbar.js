import React,{useEffect} from "react";
import { useHistory } from 'react-router-dom';



function Navbar() {
    useEffect(() => {
        Authenticate();
    }, []);


    const Authenticate = async (e) => {
        const isuserLoggedIn = sessionStorage.getItem("LoginName");
        if (isuserLoggedIn == null) {
            window.location.href = "/login";
        }
    };

    const SignOut = () => {
        sessionStorage.clear();
        window.location.href = "/login";
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    ShopEasy
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">
                                Home
                            </a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link active" href="/about">
                                About us
                            </a>
                        </li> */}
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                href="/showproduct"
                                >
                                Mobile Phones
                            </a>
                            {/* <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="/insertproduct">
                                        Insert products
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/showproduct">
                                        All products
                                    </a>
                                </li>
                            </ul> */}
                        </li>

                        <li className="nav-item ">
                            <a
                                className="nav-link active "
                                href="/cloths"
                                // role="button"
                                // data-bs-toggle="dropdown"
                                // aria-expanded="false"
                            >
                                Cloth's
                            </a>
                           
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/todaysdeals">
                                Today's Deals
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/signup">
                                Create Account
                            </a>
                        </li>

                    </ul>
                    <a className="nav-link" >
                        Hello...   {sessionStorage.getItem("LoginName")}
                    </a>
                    <a>

                        <button className="btn btn-danger" type="submit" onClick={SignOut} href="/logout">
                            Logout
                        </button>
                    </a>
                </div>
            </div>
        </nav>




    );
}

export default Navbar;