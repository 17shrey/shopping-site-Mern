import React, { useEffect, useState } from 'react'
import Navbar from './navbar'

const Todaysdeals = () => {
    const [category, setCategory] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetcCategory();
        fetcProducts();
    }, [])

    const fetcCategory = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products/categories')
            const data = await response.json();
            setCategory(data);
        } catch (error) {
            console.log("Error:", error)
        }
    };
    const filterproduct = async (param) => {
        if (param == "All") {

            const rest = await fetch("https://dummyjson.com/products/");
            const data = await rest.json();
            setProducts(await data.products);
        }
        else {
            const rest = await fetch("https://dummyjson.com/products/category/" + param);
            const data = await rest.json();
            setProducts(await data.products);
        }

    };

    const fetcProducts = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products')
            const data = await response.json();
            setProducts(data.products)
        } catch (error) {
            console.log("error", (error))
        }
    }



    return (
        <>
            <Navbar />
            <div className="row">
                <div className="col-md-2 p-4">
                    <div className="list-group"style={{ border:"1px solid black"  }}>
                        <a
                            href="#"
                            onClick={() => filterproduct('All')}
                            className="list-group-item list-group-item-action active"
                            aria-current="true"
                        >
                            All category's

                        </a>
                        {category.map((item, index) => (
                            <>
                                <a href="#"
                                    onClick={() => filterproduct(item)}
                                    className="list-group-item list-group-item-action">
                                    <span>{item}</span>
                                </a>
                            </>
                        )
                        )}


                    </div>
                </div>
                <div className="col md-5">
                    <div className='row ' style={{display: "flex", justifyContent:"center",alignItems:"center"}}>
                        {products.map((item, index) => (
                            <>



                                <div className="card my-4 mx-4  " style={{ border:"1px solid black" , height:470,width: "16rem", }}>
                                    <img src={item.thumbnail}
                                        style={{ width: "100%", height: 150 }}
                                        className="card-img-top" alt="..." />

                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">
                                            {item.description}
                                        </p>
                                    </div>
                                    <a href="#" className="btn btn-success">
                                        Buy Now
                                    </a>
                                    <a href="#" className="btn btn-info my-2">
                                        Add to cart
                                    </a>
                                </div>

                            </>
                        ))}
                    </div>
                </div>
            </div>



        </>
    )
}

export default Todaysdeals





