import React from 'react'
import {SidebarContainer, 
        Icon, 
        CloseIcon,
        SidebarMenu,
        SidebarLink,
        SidebarRoute,
        SideBtnWrap
        } from './sideBarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
        <SidebarMenu>
            <SidebarLink to = '/'>Bags</SidebarLink>
            <SidebarLink to = '/'>Jewelries</SidebarLink>
            <SidebarLink to = '/'>Full Menu</SidebarLink>
        </SidebarMenu>  
        <SideBtnWrap>
            <SidebarRoute to ='/'>Order Now</SidebarRoute>
        </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
