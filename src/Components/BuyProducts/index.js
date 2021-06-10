import React, { useState, useEffect } from 'react'
import { ProductNav, ProductContainer, ProductCard, ProductDesc,  Nav, ProductPrice } from './ProductElements'
import { Link , useHistory} from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { Bars } from '../NavBar/NavBarElements'
import 'bootstrap/dist/css/bootstrap.min.css'
import './productPage.css'
import Fetch2 from '../Products/fetch2'
import Navbar from '../NavBar'
import { PaystackButton } from 'react-paystack'
import CartReceipt from '../Cart/CartReceipt'

const money =27473
const config = {
    reference: (new Date()).getTime(),
    email: "shawnwhilst41@gmail.com",
    amount: money * 100,
    publicKey: 'pk_test_8dbce5dd05e80b724c36fef796b0845fde24459c',
  };

 function BuyProd ({ match }) {

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

    useEffect(() => {
        fetchItem();
        console.log(match)
    }, [])

    const [item, setItem] = useState({
        image: {}
    })

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)

    const item = await fetchItem.json();
        setItem(item)
        console.log(item)
    }
 

    

    return (
        <div>
       <ProductContainer>
            <Navbar />
                <hr className='line' />
                    <h1 className='page-title'>{item.title}</h1>
                    <hr className='line' />
                <div className='container mt-4'>
                    <div className='row'>
           <ProductCard className='col '>
               <img className='img-prod' src={item.image} alt='/' />
           </ProductCard>

            <ProductDesc className='col'>
            <h1 className='prod-name'>
                <strong className='name'>Name:</strong> {item.title}
           </h1>
           <h1 className='desc-name'> 
               <strong className='name'>Description:</strong> {item.description}
           </h1>
           <ProductPrice className='prod-name'>
               <strong className='name'>Price:</strong> ${item.price}</ProductPrice>
               <div>
                     <PaystackButton className='paystack-button' {...componentProps} />
                </div>
           </ProductDesc> 
           </div>
           </div>    
           <h3 className='page2-title'>Similar Products</h3>  
                <Fetch2 />
       </ProductContainer>

           
       </div>
       
    )
}

export default BuyProd;