import styled from 'styled-components'
import CartBg from '../../images/moneytransfer.jpg'
import ReceiptBg from '../../images/categoriespage.jpg'

export const CartContainer =styled.div
`
    background: linear-gradient(to right, rgba(0,0,0,.5),
    rgba(0,0,1,1)), 
    url(${CartBg});
    background-position: center;
    background-size: contain;
    height: 100vh;
`
export const ReceiptPage = styled.div
`
    background: linear-gradient(to right, rgba(0,0,0,.5),
    rgba(0,0,1,1)), 
    url(${ReceiptBg});
    background-position: center;
    background-size: contain;
    height: 100vh; 
`