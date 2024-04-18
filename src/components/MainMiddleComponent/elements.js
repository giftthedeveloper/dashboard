import styled from "styled-components";


export const MainComponent = styled.div`
    width: 100%;
    height: 85%;
    margin-top: 52px;
    margin-left: 2.5%;
    margin-right: 2.5%;
    margin-bottom: 22px;
`;

export const SubmainComponent = styled.div`
    width: 100%;
    height: 83%;
    /* background-color: #888; */
    margin-top: 8%;
    display: flex;
`;


export const LeftComponent = styled.div`
    width: 70%;
    height: 100%;
    /* background-color: pink; */
    display: flex;
    align-items: center;
    justify-content: center; /* Center the content horizontally */
    flex-direction: column;
    border-radius: 10px;
    /* margin-bottom: 20px; */
`;


export const LeftTopComponent = styled.div`
    width: 100%;
    height: 60%;
    background-color: white;
    display: flex;
    align-items: flex-start;
    text-align: left;
    border-radius: 10px;
`;

export const LeftBottomComponent = styled.div`
    width: 100%;
    height: 40%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    flex-direction: column;
    border-radius: 10px;
    margin-top: 20px;
    justify-content: center; 
`;

export const TableContainer = styled.div`
    margin-top: 10px;
    display: flex;
    /* background-color: orange; */
    width: 100%;

`;


export const TableRow = styled.tr`
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add drop shadow to each row */
    width: 100%; 
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 10px;
    font-size: 14px;
    /* background-color: pink; */
    margin-bottom: 10px; /* Add margin between rows */
`;


export const TableCell = styled.td`
    margin-right: 70px;
    display: flex;
`;
export const CompleteTableButton = styled.button`
    padding: 5px 10px;
    background-color: #44ac04;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export const PendingTableButton = styled.button`
    padding: 5px 10px;
    background-color: #f48414;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export const ProcessingTableButton = styled.button`
    padding: 5px 10px;
    background-color:  #1ebfcd ;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;
export const StyledTable = styled.table`
    width: 100%; 
    display: flex;
    /* background-color: pink; */
`;

export const RightComponent = styled.div`
    width: 30%;
    height: 100%;
    /* background-color: gray; */
    display: flex;
    align-items: flex-end;
    justify-content: center; /* Center the content horizontally */
    flex-direction: column;
    border-radius: 0px;
    /* margin-bottom: 20px; */
`;



export const RightTopComponent = styled.div`
    width: 95%;
    height: 35%;
    background-color: white;
    display: flex;
    align-items: flex-start;
    justify-content: center; 
    text-align: left;
    flex-direction: column;
    border-radius: 10px;
    text-align: left;
    padding-left: 10px;
    /* margin-bottom: 20px; */
`;

export const RightBottomComponent = styled.div`
    width: 95%;
    height: 65%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    flex-direction: column;
    border-radius: 10px;
    margin-top: 20px;
    justify-content: center; /* Center the content horizontally */
`;

export const HeaderText = styled.h3`
    font-size: 14px;
    color: #888;

`;

export const GraphHeaderText = styled.h3`
    font-size: 14px;
    color: #888;
    margin-top: 20px;
    margin-left: 20px;

`;


export const ActivityList = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 7px;
  height: 100%;
  background-color: white;
  
`;

export const MainText = styled.p`
    font-size: 11px;
    font-weight: bold;
    margin: 0px;
    margin-top: 5px;
`;


export const SubText = styled.p`
    font-size: 11px;
    margin: 0px;
    color: #888;
`;

export const UpcomingProgramHeaderText = styled.h3`
    font-size: 14px;
    margin-left: 15px;
    margin-top: 5px;

`;


export const ProgramItemsComponent = styled.div`
    display:flex;
    background-color: white;
    height: 20%;
    width: 90%;
    border-radius: 3px;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
    margin-left: 15px;
    margin-bottom: 15px;
    border: None;
    outline: None;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.01), 0 0 1px rgba(0, 0, 0, 0.05), 0 0 2px rgba(0, 0, 0, 0.1);


`;


export const ImgIcon = styled.div`
width: 25px;
height: 25px;
margin-left: 5px;
border-radius: 50%;
background-color: #fcd8ce ;
`; 

export const BlueImgIcon = styled.div`
width: 25px;
height: 25px;
margin-left: 5px;
border-radius: 50%;
background-color: #99c4fc ;
`; 

export const RedImgIcon = styled.div`
width: 25px;
height: 25px;
margin-left: 5px;
border-radius: 50%;
background-color: #b46494 ;
`; 

export const ProgramItemsList = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10px;
  /* width: 10%; */
  height: 100%;
  background-color: white;
  
`;



export const Name = styled.div`
  font-size: 12px;
  margin-bottom: 0px;
  font-weight: bold;
  margin: 0px;
  margin-top: 5px;

`;
export const Subject = styled.div`
  margin-top: 5px;
   
  font-size: 10px;
  color: #888;
  text-align: left;


`;

export const Date = styled.div`

  font-size: 10px;
  color: #888;
  text-align: left;
  margin: 0px;

`;