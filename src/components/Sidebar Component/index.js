import React from 'react'
import { BottomComponent,HeaderText,MenuItem, IconWrapper, LeftComponent, LogoComponent, MainComponent, RightComponent } from './elements'
import { PersonOutlineOutlined, ShoppingCart, ShoppingCartOutlined, Speed, StackedLineChart, TaskOutlined, TrackChanges } from '@mui/icons-material';


function SidebarComponent() {
  return (
    <MainComponent>
        <LogoComponent />
        <HeaderText>MENU</HeaderText>
        <LeftComponent>
          <MenuItem>
              <IconWrapper><Speed /></IconWrapper>
              Dashboard
          </MenuItem>

          <MenuItem>
              <IconWrapper><ShoppingCartOutlined /></IconWrapper>
              Project
          </MenuItem>

          <MenuItem>
              <IconWrapper><TrackChanges /></IconWrapper>
              Tracking
          </MenuItem>

          <MenuItem>
              <IconWrapper><PersonOutlineOutlined /></IconWrapper>
              Customers
          </MenuItem>
          
          <MenuItem>
              <IconWrapper><StackedLineChart /></IconWrapper>
              Analytics
          </MenuItem>

          <MenuItem>
              <IconWrapper><TaskOutlined /></IconWrapper>
              Task
          </MenuItem>

        </LeftComponent>
        <HeaderText>PROFILE</HeaderText>
        <RightComponent>

        <MenuItem>
              <IconWrapper><TaskOutlined /></IconWrapper>
              Task
          </MenuItem>

          <MenuItem>
              <IconWrapper><TaskOutlined /></IconWrapper>
              Task
          </MenuItem>
          <MenuItem>
              <IconWrapper><TaskOutlined /></IconWrapper>
              Task
          </MenuItem>

        </RightComponent>
        <BottomComponent>

        </BottomComponent>
    </MainComponent>
        
  )
}

export default SidebarComponent
