import React from 'react'
import { HeaderText, LeftComponent, DayName, WeatherLocation, Nav, NavContainer, Profile, ProfileList, ProfileName, ProfileRole, WeatherImg } from './elements'

function NavbarComponent() {
  return (
    <Nav>
        <NavContainer>
            <LeftComponent>
                <ProfileList>
                    <Profile>
                        <WeatherImg />
                        <HeaderText>75</HeaderText>
                        <ProfileList>
                            <DayName>Wednesday</DayName>
                            <WeatherLocation>Sydney, Australia</WeatherLocation>
                        </ProfileList>
                    </Profile>
                </ProfileList>
                <ProfileList>
                    <ProfileName>Welcome, Devon Lane!</ProfileName>
                    <ProfileRole>Manager</ProfileRole>
                </ProfileList>
            </LeftComponent>

        </NavContainer>
    </Nav>
  )
}

export default NavbarComponent
