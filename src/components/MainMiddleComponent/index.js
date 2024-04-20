import React from 'react'
import { ActivityList,TableContainer,TableCell,DurationButton,  StyledTable, GraphTextArea, GraphSection, CompleteTableButton, PendingTableButton, ProcessingTableButton, TableRow, BottomComponent,Date, Name, HeaderText, ImgIcon, LeftComponent, MainComponent, MainText, ProgramItemsComponent, ProgramItemsList, RightBottomComponent, RightComponent, RightTopComponent, SubText, Subject, SubmainComponent, TopComponent, UpcomingProgramHeaderText, BlueImgIcon, RedImgIcon, LeftTopComponent, LeftBottomComponent, GraphHeaderText, DropdownIcon } from './elements'
// import SalesGraphComponent from '../SalesGraphComponent'
import { Line } from 'react-chartjs-2'
import revenurData from './data/RevenueData.json'
import { CanvasRenderingContext2D } from 'canvas';
import { Chart, registerables } from 'chart.js';
import { X } from '@mui/icons-material';
Chart.register(...registerables);


function MainMiddleComponent() {
  return (
    <MainComponent>
        <SubmainComponent>
        <LeftComponent>
                    <LeftTopComponent>
                        <GraphTextArea>
                            <GraphHeaderText>Sales Activities</GraphHeaderText>
                            <DurationButton>Yearly
                            <DropdownIcon />
                            </DurationButton>
                        </GraphTextArea>
                        <GraphSection>
                        <Line
                            data={{
                                labels: revenurData.map((data) => data.label),
                                datasets: [
                                {
                                    // label: "Revenue",
                                    data: revenurData.map((data) => data.revenue),
                                   
                                    borderColor: "#064ff0",
                                    fill: true,
                                    backgroundColor: "#e9f5fd",

                                }
                                ],
                            }}
                            options={
                        
                                {
                                    plugins: {
                                        legend: {
                                            display: false
                                        },
                                      
                                        
                                    },
                                backgroundColor: 'rgba(128, 189, 255, 0.2)',
                                scales: {
                                x: {
                                    beginAtZero: true,
                                    grid: {
                                    display: false, 
                                    },
                                },
                                y: {
                                    beginAtZero: true,
                                    ticks: {
                                        stepSize: 10000,
                                    },
                                    grid: {
                                    display: false, 
                                    },
                                },
                                },
                              
                               
                                elements: {
                                    point: {
                                      radius: 0, 
                                    },
                                },
                                lineTension: 0.4,
                                layout: {
                                    padding: 0,
                                  },
                                responsive: true,
                            }}
                            />

                            </GraphSection>
                        
                    </LeftTopComponent>
                    <LeftBottomComponent>
                        <GraphHeaderText>Orders</GraphHeaderText>
                        <TableContainer>
                            <StyledTable>
                            <table>
                            <thead>
                                <TableRow>
                                    <th><TableCell>Code</TableCell></th>
                                    <th><TableCell>Name</TableCell></th>
                                    <th><TableCell>Location</TableCell></th>
                                    <th><TableCell>Start Date</TableCell></th>
                                    <th><TableCell>Status</TableCell></th>
                                </TableRow>
                            </thead>

                                <tbody>
                                    <TableRow>
                                        <td><TableCell>#2458</TableCell></td>
                                        <td><TableCell>Ronald Richards</TableCell></td>
                                        <td><TableCell>Deskoto Oklahoma</TableCell></td>
                                        <td><TableCell>16/11/21</TableCell></td>
                                        <td><TableCell><CompleteTableButton>Complete</CompleteTableButton></TableCell></td>

                                    </TableRow>
                                    <TableRow>
                                        <td><TableCell>#2458</TableCell></td>
                                        <td><TableCell>Theresa Webb</TableCell></td>
                                        <td><TableCell>Portland llinious</TableCell></td>
                                        <td><TableCell>17/11/21</TableCell></td>
                                        <td><TableCell><PendingTableButton>Pending</PendingTableButton></TableCell></td>
                                    </TableRow>

                                   
                                </tbody>
                            </table>
                            </StyledTable>
                        </TableContainer>
                    </LeftBottomComponent>
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
