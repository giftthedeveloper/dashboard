import React, { Profiler } from 'react'
import { BottomComponent,HeaderText,MenuItem, IconWrapper, LeftComponent, LogoComponent, MainComponent, 
     RightComponent, ProfileContainer, ProfileImage, ProfileName, DropdownIcon, ProfileRole, 
     ProfileInfo,ColoredMenuItem, ProfileList, Profile,
     ProfileRoleContainer} from './elements'
import { MessageOutlined, NotificationsNoneOutlined, PersonOutlineOutlined, SettingsOutlined, ShoppingCart, 
     ShoppingCartOutlined, Speed, StackedLineChart, TaskOutlined, TrackChanges, } from '@mui/icons-material';


function SidebarComponent() {
  return (
    <MainComponent>
        <LogoComponent />
        <HeaderText>MENU</HeaderText>
        <LeftComponent>
          <ColoredMenuItem>
              <IconWrapper><Speed /></IconWrapper>
              Dashboard
          </ColoredMenuItem>

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
              <IconWrapper><MessageOutlined /></IconWrapper>
              Message
          </MenuItem>

          <MenuItem>
              <IconWrapper><NotificationsNoneOutlined /></IconWrapper>
              Notification
          </MenuItem>
          <MenuItem>
              <IconWrapper><SettingsOutlined /></IconWrapper>
              Settings
          </MenuItem>

        </RightComponent>
        <BottomComponent>
            <ProfileInfo>
            <ProfileContainer>
                <Profile>
                <ProfileImage />
                
                <ProfileList>
                <ProfileName>Devon Lane</ProfileName>
                <ProfileRole>Manager</ProfileRole>
                </ProfileList>
                <DropdownIcon />
                </Profile>
            </ProfileContainer>
            </ProfileInfo>
            {/* <ProfileRoleContainer>
                <ProfileRole>Manager</ProfileRole>
            </ProfileRoleContainer> */}
        </BottomComponent>
    </MainComponent>
        
  )
}

export default SidebarComponent
