import React, { useState, useEffect } from 'react';
import Navbar from './navbar'
import '../style.css'

const Home = () => {

    return (

        <>
            <div>
                <Navbar />


                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                        />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" >
                            <img
                                className="d-block w-100"
                                src="https://media.istockphoto.com/id/486667909/photo/happy-woman-shopping-and-holding-bags-girl.jpg?s=1024x1024&w=is&k=20&c=Zg3Ta3a352xWphOL0kwKqLiTuR1__VVHvwrP7HcYZ1E="
                                alt="Training Batch"

                                style={{ height: "500px", width: "100%" }}


                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>ShopEasy</h1>
                                <p>
                                    NewYear BIGBASH SALE..!!!
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                className="d-block w-100"
                                src="https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.jpg?s=612x612&w=0&k=20&c=wJ6yYbRrDfdmoViuQkX39s2z_0lCiNQYgEtLU--0EbY="
                                alt="Training Batch"

                                style={{ height: "500px", width: "100%" }}

                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>ShopEasy</h1>
                                <p>
                                    Stay Tuned For EXciting Offers
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                className="d-block w-100"
                                src="https://source.unsplash.com/1600x600/?Technolgoies,Computer,Training"
                                alt="Training Batch"
                                style={{ height: "500px", width: "100%" }}

                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>ShopEasy</h1>
                                <p>
                                    Shop here to calm yourself.
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>




            <div className='card'>
                <div className="container text-center">
                    <h3>What We Do</h3>
                    <br />
                    <div className="row">
                        <div className="col-sm-3">
                            <a href='/showproduct'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF2aT9rAw4Yy_pOnidQ0n3nbH6gMK9PW3Dww&usqp=CAU" style={{ width: "100%", height: "250px" }} href="signup" alt="Image" />
                            </a>
                            <b><p style={{ position: "absolute", color: "white", fontSize: "25px", bottom: "8px", left: "170px" }}> Ending Soon</p></b>
                        </div>
                        
                        <div className="col-sm-3">
                            <a href='/todaysdeals'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNk15ZoFQxSQT16d-2RVhAUugLAzbO-lkuoQ&usqp=CAU" style={{ width: "100%",height: "250px" }} alt="Image" />
                            </a><p />
                        </div>
                        <div className="col-sm-3">
                            <a href='/cloths'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ISYi7UjsLU0_vjQ2h4XFoimbHeTCQXF-mw&usqp=CAU" style={{ width: "100%",height: "250px" }} alt="Image" href="/insertproduct" />
                            </a><p />
                        </div>
                        <div className="col-sm-3">
                            <a href='/todaysdeals'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7h18r4aINsZ18vRvAM6iUryIC1SRYDkGlzg&usqp=CAU" style={{ width: "100%",height: "250px" }} alt="Image" />
                            </a><p />
                        </div>



                    </div>
                    <p></p>
                </div>
            </div>






            <div className='container mt-3'>
                <div className='row' >
                    
                    <div className='col ' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div className='card' style={{ border: "1px solid black" }}>
                            <div className='row'>
                                <div className='col'>
                                    <div className="card " style={{ marginLeft: "16px", marginBottom: "16px", marginTop: "16px", height: "180px", width: "180px" }}>
                                        <a href="/cloths">
                                        <div className="card-body text-center text-success">
                                            <img className="card-text" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEsQinMIeAwlhuki2YHKkm7LGbLTNmBOBiA&usqp=CAU" style={{ width: "100%", height: "130px" }} />

                                            <p><b>IPHONE</b></p>
                                        </div>
                                        </a>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="card " style={{ height: "180px", marginBottom: "16px", marginTop: "16px", width: "180px" }}>
                                        <div className="card-body text-center text-danger">
                                            <img className="card-text" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt0-zGVjqzB0wbyIyTmBXIdQSqJms6HmkoeQ&usqp=CAU" style={{ width: "100%", height: "130px" }} />

                                            <p><b>SAMSUNG</b></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="card " style={{ marginLeft: "16px", marginBottom: "16px", height: "180px", width: "180px" }}>
                                        <div className="card-body text-center text-danger">
                                            <img className="card-text" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuFwrb309HnpQ_t-YssWif5sHjcl3k_wSGOZyqGuX8AnvJ4S9lwHsnrh-FxcB66qFdIE&usqp=CAU" style={{ width: "100%", height: "130px" }} />
                                            <p><b>ONEPLUS</b></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="card " style={{ height: "180px", marginBottom: "16px", width: "180px" }}>
                                        <div className="card-body text-center text-success">
                                            <img className="card-text" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOW-x6v1i1YgAIQKolYGLZkUs5HGul74FI34bL6efPAkT-9Ax9NwUqIBp4SUbDkt2VcBQ&usqp=CAU" style={{ width: "100%", height: "130px" }} />

                                            <p><b>VIVO</b></p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>


                    <div className='col '>
                        <div className='card' style={{ border: "1px solid black" }}>
                            <div className='row'>
                                <div className='col'>
                                    <div className="card " style={{ marginLeft: "16px", marginBottom: "16px", marginTop: "16px", height: "180px", width: "180px" }}>
                                        <div className="card-body text-center text-danger">
                                            <img className="card-text" src="https://www.beyoung.in/api/cache/catalog/products/polo_new_update_images_10_1_2022/blue_pink_dual_color_polo_t-shirt_base_07_07_2023_700x933.jpg" style={{ width: "100%", height: "130px" }} />

                                            <p><b>POLO</b></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="card " style={{ height: "180px", marginBottom: "16px", marginTop: "16px", width: "180px" }}>
                                        <div className="card-body text-center text-success">
                                            <img className="card-text" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZi06rpUdNwYH07Q8Tqf_YNCD5ySccIbkX4g&usqp=CAU" style={{ width: "100%", height: "130px" }} />

                                            <p><b>PUMA</b></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="card " style={{ marginLeft: "16px", marginBottom: "16px", height: "180px", width: "180px" }}>
                                        <div className="card-body text-center text-success">
                                            <img className="card-text" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAoyFMm65kCpJfF7kMtJY_JJb7T5dRMAsX2Dk493HdcuN_fgWl9tYoPUK4wbZtqQThNHE&usqp=CAU" style={{ width: "100%", height: "130px" }} />

                                            <p><b>PUMA</b></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="card " style={{ height: "180px", marginBottom: "16px", width: "180px" }}>
                                        <div className="card-body text-center text-danger">
                                            <img className="card-text" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIGx-brZnY_v0j4He0uWhekXNQki-PCkYYOQ&usqp=CAU" style={{ width: "100%", height: "130px" }} />

                                            <p><b>ROADSTER</b></p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>


                    <div className='col '>
                        <div className='card' style={{ border: "1px solid black" }}>
                            <div className='row' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                            >
                                <div className='col'>
                                    <div className="card " style={{ marginLeft: "16px", marginBottom: "16px", marginTop: "16px", height: "180px", width: "180px" }}>
                                        <div className="card-body text-center text-danger">
                                            <img className="card-text" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhgexTcj6_u9gxT84WprisYWUUatW6kwCyw&usqp=CAU" style={{ width: "100%", height: "130px" }} />

                                            <p><b>PUMA</b></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="card " style={{ height: "180px", marginBottom: "16px", marginTop: "16px", width: "180px" }}>
                                        <div className="card-body text-center text-success">
                                            <img className="card-text" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6pyOzgWPyhYEdubHMFevoJq3O1Gs8UYzSUQ&usqp=CAU" style={{ width: "100%", height: "130px" }} />

                                            <p><b>ROADSTER</b></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="card " style={{ marginLeft: "16px", marginBottom: "16px", height: "180px", width: "180px" }}>
                                        <div className="card-body text-center text-success">
                                            <img className="card-text" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJVE6eDE43fZkgh12-aRHt3jkX2EzBHEKCgLcQU-u4AZssHLfDbgG0kvxcBtDQiHskMaw&usqp=CAU" style={{ width: "100%", height: "130px" }} />

                                            <p><b>PUMA</b></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="card " style={{ height: "180px", marginBottom: "16px", width: "180px" }}>
                                        <div className="card-body text-center text-danger">
                                            <img className="card-text" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ZVfHGKC9-QhTGKldIMz2RoCIUVbJcLGD-A&usqp=CAU" style={{ width: "100%", height: "130px" }} />

                                            <p><b>POLO</b></p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>



            <div className='mt-3'>
                <img src="https://www.shutterstock.com/image-vector/banner-announcing-mega-discount-half-260nw-1962489325.jpg" alt="loading" style={{ height: "280px", width: "100%" }} />
            </div>

            <div className='card my-2 mx-4'>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-sm-3 text-center" >
                            <div className="card my-5 mx-4 col-md-8 " style={{ height: "170px", width: "80%" }}>
                                <div className="card-body " >
                                    <h5 className="card-title">Third party API</h5>
                                    <p className="card-text">
                                        Show other product
                                    </p>
                                    <a href="/todaysdeals" className=" btn btn-primary">
                                        Todaysdeals
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 text-center">
                            <div className="card my-5 mx-4 col-md-8" style={{ height: "170px", width: "80%" }}>
                                <div className="card-body sm-3">
                                    <h5 className="card-title">Join Contest
                                    </h5>
                                    <p className="card-text">
                                        To Enroll Contest.
                                    </p>
                                    <a href="/crudpage" className="btn btn-primary">
                                        Join Contest
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 text-center">
                            <div className="card my-5 mx-4 col-md-8" style={{ height: "170px", width: "80%" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Product Insertion</h5>
                                    <p className="card-text">
                                        Add your product
                                    </p>
                                    <a href="/insertproduct" className="btn btn-primary">
                                        New Product
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 text-center">
                            <div className="card my-5 mx-4 col-md-8" style={{ height: "170px", width: "80%" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Category Insertion</h5>
                                    <p className="card-text">
                                        Add your category
                                    </p>
                                    <a href="/categoryapi" className="btn btn-primary">
                                        New Category
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='container'>
                <h2 className='duster'>Best seller in clothes section</h2>
                <div class="row">

                </div>
            </div> */}


            <footer className='section-p1' style={{ backgroundColor: "darkblue", color: "white" }}>
                <div className='container-fluid'>
                    <div className='row' >
                        <div className='col' style={{ marginLeft: "5px", marginBottom: "40px" }}>

                            <h3>contact</h3>
                            <p style={{ marginBottom: "0px" }}><strong>Address:</strong> 55E Blue stright, South hampton, Manchester </p>
                            <p style={{ marginBottom: "0px" }}><strong>Email:</strong> ShopEasy@being.in</p>
                            <p style={{ marginBottom: "0px" }}><strong>Phone:</strong> +88 205-4266</p>
                            <p style={{ marginBottom: "0px" }}><strong>Hours:</strong> 10.00 - 6.00, Mon - Sat</p>

                        </div>
                        <div className='col' style={{ display: "flex", flexDirection: "column", marginBottom: "15px" }}>
                            <h3>About</h3>
                            <a>About us</a>
                            <a>Delivery Information</a>
                            <a>Privacy Policy</a>
                            <a>Terms & Conditions</a>

                        </div>
                        <div className='col'>
                            <div className='follow'>
                                <h3>Follow us</h3>
                                <div className='icon'>
                                    <i className='fab fa-facebook-f'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>



        </>
    )
}

export default Home
