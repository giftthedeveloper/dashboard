import React from 'react'
import { HeaderText, LeftComponent,SearchBarContainer, SearchIcon, SearchInput, DayName, WeatherLocation, Nav, NavContainer, Profile, ProfileList, ProfileName, ProfileRole, WeatherImg, RightComponent, ProjectButton, CalendarIcon, DateDetails, AddIcon, SearchBar, NotificationCircle, NotificationIcon, WeatherList } from './elements'

function NavbarComponent() {
  return (
    <Nav>
        <NavContainer>
            <LeftComponent>
                <ProfileList>
                    <Profile>
                        <WeatherImg />
                        <HeaderText>75</HeaderText>
                        <WeatherList>
                            <DayName>Wednesday</DayName>
                            <WeatherLocation>Sydney, Australia</WeatherLocation>
                        </WeatherList>

                        <RightComponent>
                        <SearchBarContainer>
                            <SearchIcon />
                            <SearchInput type="text" placeholder="Search here..." />
                        </SearchBarContainer>
                        <ProjectButton>
                                <DateDetails>
                                    <AddIcon /> Add Project
                                </DateDetails>
                            </ProjectButton>
                            <ProjectButton>
                                <DateDetails>
                                    <CalendarIcon /> 30/11/2021
                                </DateDetails>
                        </ProjectButton>
                        <NotificationCircle>
                            <NotificationIcon />
                        </NotificationCircle>

                        </RightComponent>


                    </Profile>
                </ProfileList>
                <ProfileList>
                    <ProfileName>Welcome, Devon Lane!</ProfileName>
                    <ProfileRole>Manager</ProfileRole>
                </ProfileList>
            </LeftComponent>

            {/* <RightComponent>
                <Profile>
                <SearchBarContainer>
                    <SearchIcon />
                    <SearchInput type="text" placeholder="Search here..." />
                </SearchBarContainer>
                <ProjectButton>
                        <DateDetails>
                            <AddIcon /> Add Project
                        </DateDetails>
                    </ProjectButton>
                    <ProjectButton>
                        <DateDetails>
                            <CalendarIcon /> 30/11/2021
                        </DateDetails>
                </ProjectButton>
                <NotificationCircle>
                    <NotificationIcon />
                </NotificationCircle>

                </Profile>
                
            </RightComponent> */}

        </NavContainer>
    </Nav>
  )
}

export default NavbarComponent
