import React from 'react'
import { Nav, NavIcon, NavLink, Bars } from './NavBarElements'

const Navbar = ({toggle}) => {
    return (
        <>
           <Nav>
               <NavLink to ='/'>SK shop</NavLink>
               <NavIcon onClick={toggle}>
                   <p>Menu</p>
                   <Bars />
               </NavIcon>
           </Nav>
        </>
    )
}

export default Navbar
