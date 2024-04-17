import React from 'react'
import { HeaderText, LeftComponent,SearchBarContainer,IconsRightComponent, SearchIcon, SearchInput, DayName, WeatherLocation, Nav, NavContainer, Profile, ProfileList, ProfileName, ProfileRole, WeatherImg, RightComponent, ProjectButton, CalendarIcon, DateDetails, AddIcon, SearchBar, NotificationCircle, NotificationIcon, WeatherList, BottomProfile, WelcomeContainer, IconsProfile, BottomProfileList, SalesList, MoneyIcon, IconItemsComponent, MoneyGrowthIcon, MoneyAnalysisIcon, RightArrowIcon } from './elements'

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
                {/* <BottomProfile> */}
                    <BottomProfileList>
                        <WelcomeContainer>
                            <ProfileName>Welcome, Devon Lane!</ProfileName>
                            <ProfileRole>Manager</ProfileRole>
                        </WelcomeContainer>
                        <IconsRightComponent>
                            <IconItemsComponent>
                                <MoneyIcon />
                                <SalesList>
                                    <DayName>N8,542.40</DayName>
                                    <WeatherLocation>Net Benefit</WeatherLocation>
                                </SalesList>
                            </IconItemsComponent>

                            <IconItemsComponent>
                                <MoneyGrowthIcon />
                                <SalesList>
                                    <DayName>N782.45</DayName>
                                    <WeatherLocation>Referenced Earnings</WeatherLocation>
                                </SalesList>
                            </IconItemsComponent>

                            <IconItemsComponent>
                                <MoneyAnalysisIcon />
                                <SalesList>
                                    <DayName>N5,896.00</DayName>
                                    <WeatherLocation>Accessed Sales</WeatherLocation>
                                </SalesList>
                            </IconItemsComponent>
                                <RightArrowIcon />


                          
                        </IconsRightComponent>
                    </BottomProfileList>
                    
                {/* </BottomProfile> */}
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
