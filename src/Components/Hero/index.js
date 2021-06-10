import React, {useState} from 'react'
import Navbar from '../NavBar'
import Sidebar from '../SideBar'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
       setIsOpen(!isOpen) 
    }
    return (
        <HeroContainer>
            <Navbar toggle={toggle} />
            <Sidebar  isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Best Jewelries and Bags Ever</HeroH1>
                    <HeroP>Ready For Sale!</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
