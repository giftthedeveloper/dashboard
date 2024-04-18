import React from 'react'
import { ActivityList, BottomComponent,Date, Name, HeaderText, ImgIcon, LeftComponent, MainComponent, MainText, ProgramItemsComponent, ProgramItemsList, RightBottomComponent, RightComponent, RightTopComponent, SubText, Subject, SubmainComponent, TopComponent, UpcomingProgramHeaderText, BlueImgIcon, RedImgIcon, LeftTopComponent, LeftBottomComponent, GraphHeaderText } from './elements'

function MainMiddleComponent() {
  return (
    <MainComponent>
        <SubmainComponent>
            <LeftComponent>
                <LeftTopComponent>
                    <GraphHeaderText>Sales Activities</GraphHeaderText>
                </LeftTopComponent>
                <LeftBottomComponent></LeftBottomComponent>
            </LeftComponent>
            <RightComponent>
                <RightTopComponent>
                    <HeaderText>User Activity</HeaderText>
                    <ActivityList>
                        <SubText>Online Visitor</SubText>
                        <MainText>556555</MainText>
                    </ActivityList>
                    <ActivityList>
                        <SubText>Offline Visitor</SubText>
                        <MainText>224505</MainText>
                    </ActivityList>
                </RightTopComponent>
                <RightBottomComponent>
                    <UpcomingProgramHeaderText>Upcoming Programs</UpcomingProgramHeaderText>
                    <ProgramItemsComponent>
                        <ImgIcon />
                        <ProgramItemsList>
                            <Date>15 Nov,2021</Date>
                            <Name>Coconut Water & Coconut oil</Name>
                            <Subject>Healthy Products</Subject>
                        </ProgramItemsList>
                    </ProgramItemsComponent>
                    <ProgramItemsComponent>
                        <RedImgIcon />
                        <ProgramItemsList>
                            <Date>20 Nov,2021</Date>
                            <Name>Herbal Supplements</Name>
                            <Subject>Medical Products</Subject>
                        </ProgramItemsList>
                    </ProgramItemsComponent>
                    <ProgramItemsComponent>
                        <BlueImgIcon />
                        <ProgramItemsList>
                            <Date>17 Nov,2021</Date>
                            <Name>NDC-Out Cover-Up Compact</Name>
                            <Subject>Cosmetic Products</Subject>
                        </ProgramItemsList>
                    </ProgramItemsComponent>
                </RightBottomComponent>
            </RightComponent>
        </SubmainComponent>
    </MainComponent>
  )
}

export default MainMiddleComponent
