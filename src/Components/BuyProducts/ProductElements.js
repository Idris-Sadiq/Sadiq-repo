import styled from 'styled-components'
import ProdBg from '../../images/moneytransfer.jpg'

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
    `
export const ProductNav = styled.div
    `
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p {
        transform: translate(-175%, 100%);
        font-weight: bold;
    }
        `
export const ProductContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,.7),
    rgba(0,0,1,1)), 
    url(${ProdBg});

    height: 95vh;
    background-position: center;
    background-size: cover; 
`

export const ProductCard = styled.div`
        height: calc{100vh - 80px};
        max-height: 100%;
        width: 100vw;
        padding: 0 rem calc{(100vw - 1300px) /2};
        color: white;
`

export const ProductDesc = styled.p`
    font-size: 1rem;
    margin-bottom: 20px;
    color: white;
    border: 3px;
    height: 400px;
    width: 200px;
    word-wrap: break-word;
    border-style: inset;
    text-align: justify;
    margin-right: 100px;
`

export const ProductPrice = styled.p`
    font-size: 2rem;
    margin-bottom: 20px;
    font-family: 'Roboto';
    color: white;
`
export const ProductBtn = styled.button`
        font-size: 1.4rem;
        padding: 1rem 4rem;
        border: none;
        background: #e31837;
        color: #fff;
        transition: 0.2s ease-out;

        &:hover {
            background: #ffc500;
            transition: 0.2s ease-out;
            cursor: pointer;
            color: #000;
        }
`