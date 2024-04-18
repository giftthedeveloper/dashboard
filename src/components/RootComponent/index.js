import React from 'react'
import { Background } from './elements'
import SidebarComponent from '../Sidebar Component'
import NavbarComponent from '../NavbarComponent'
import MainMiddleComponent from '../MainMiddleComponent'

function RootComponent() {
  return (
    <Background>
        
        <SidebarComponent />
        <NavbarComponent />
        <MainMiddleComponent />
        
    </Background>
  )
}

export default RootComponent
