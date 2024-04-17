import React from 'react'
import { Background } from './elements'
import SidebarComponent from '../Sidebar Component'
import NavbarComponent from '../NavbarComponent'

function RootComponent() {
  return (
    <Background>
        
        <SidebarComponent />
        <NavbarComponent />
        
    </Background>
  )
}

export default RootComponent
