import React, { useState, useEffect } from 'react'
import './style1.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const api = 'https://fakestoreapi.com/products?limit=8'


function Fetch() {
     const [prodData, setProdData] = useState([])

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts =async () => {
        const response = await fetch(api)
        const jsonData = await response.json()
        setProdData(jsonData)
    }
    const [ cart, setCart ] = useState([])

    const addToCart = (prod) => {
            setCart([...cart, prod])
       
    }

    return (
        <div>
            <div className='row d-flex flex-column'>
             <h3 className='header mt-4'>Popular Products 
             <Link to='/cart'>
                 <button className='btn'><FaShoppingCart /> ({cart.length})</button>  
             </Link></h3>
             </div>
            
    
                            <hr />
            <div className='row'>
                {
                    prodData.map(prod=>(
                        <div className='col-3 d-flex flex-column justify-content-center align-items-center mt-3'> 
                           
                        <img className='img' src={prod.image} alt='/' />

                        <Link to ={`/buyprod/${prod.id}`} style={{color: 'black'}}><h3 className='title mt-3'>{prod.title}</h3></Link>

                        <h3 className='category'>{prod.category}</h3>
                        <button onClick={() => addToCart(prod)} className='button'>Add to Cart <FaShoppingCart /></button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Fetch