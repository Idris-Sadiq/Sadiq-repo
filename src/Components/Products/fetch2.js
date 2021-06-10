import React, { useState, useEffect } from 'react'
import './style1.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const api = 'https://fakestoreapi.com/products/category/jewelery?sort=desc'


function Fetch2() {
     const [prodData, setProdData] = useState([])

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts =async () => {
        const response = await fetch(api)
        const jsonData = await response.json()
        setProdData(jsonData)
        console.log(jsonData)
    }

    return (
        <div>
                <hr />
            <div className='row'>
                {
                    prodData.map(prod=>(
                        <div className='col-3 d-flex flex-column justify-content-center align-items-center product-container'> 
                           
                        <img className='img' src={prod.image} />

                        <Link style={{color: 'black'}} to='App'><h3 className='title mt-3'>{prod.title}</h3></Link>

                        <h3 className='category'>{prod.category}</h3>

                        <button className='button'>Add to Cart <FaShoppingCart /></button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Fetch2