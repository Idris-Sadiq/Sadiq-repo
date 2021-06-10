import React, {useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CartContainer } from './CartElements'
import { Link, useHistory } from 'react-router-dom'
import Navbar from '../NavBar'
import cartPics from '../../images/moneytransfer.jpg'
import { FaShoppingBasket, FaTrash } from 'react-icons/fa'
import { PaystackButton } from 'react-paystack'
import CartReceipt from './CartReceipt'

const money = 20000
const config = {
    reference: (new Date()).getTime(),
    email: "shawnwhilst41@gmail.com",
    amount: money * 100,
    publicKey: 'pk_test_8dbce5dd05e80b724c36fef796b0845fde24459c',
  };


function Cart() {

    let history = useHistory()

    const handlePayStackSuccess = (reference) => {  
            history.push('/receipt')
    }

    const handlePayStackClose = () => {
            // alert('Unsuccesful!')
    }

    const componentProps = {
        ...config,
        text: 'Pay($)',
        onSuccess: (reference) => handlePayStackSuccess(reference),
        onClose: handlePayStackClose,
    }

    const api = 'https://fakestoreapi.com/carts?limit=4'


    const [cartData, setCartData] = useState([])



    useEffect(() => {
        getCartItems();
    }, [])

    const getCartItems =async () => {
        const response = await fetch(api)
        const jsonData = await response.json()
        setCartData(jsonData)
    }

    
      const decreaseQuantity = () => {
        const currentItems = [...cartData];

        if (currentItems.length >= 1) {
          currentItems.length -= 1;
          setCartData(currentItems);
        }
      };

 
    return (
        
        <CartContainer>
            <Navbar />
        <div className='row'>
            <header>
                <h1 className='header text-light'>Cart Details <button className='btn'><FaShoppingBasket/> ({cartData.length})</button>
                <div>
                     <PaystackButton className='paystack-button' {...componentProps} />
                </div>
            </h1>
           
            </header>
             
        
                <>
            <table class="container table table-bordered table-sm table-dark">
            <thead className='headtable text-light'>
                <tr>
                    <th scope="col">userId</th>
                    <th scope="col">Image</th>
                    <th scope="col">Date</th>
                    <th scope="col">(DeleteProduct)</th>
                </tr>
            </thead>
            {
                cartData.map(cart=>{
                    return(
                        <>
                        <tbody className='bodytable text-light'>
                <tr>
                <th scope="row col-2">{cart.userId}</th>
                <td><img className='img-cart' src={cartPics} alt='/' /></td>
                <td className=''>{cart.date}</td>
                <td className='col-3'>
                    <div>
                <button 
                    onClick = {decreaseQuantity}
                    className='btn2'>Remove <FaTrash style={{color: '#e31923'}}/></button>
                </div>
                    </td>
                </tr>
            
            </tbody>
                        </>
                    )
                })
            }
            
     </table>
              
                
            </>
          
         
    </div>
    </CartContainer>
    )
}

export default Cart