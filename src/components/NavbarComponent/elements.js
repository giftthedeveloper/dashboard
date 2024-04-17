import styled from 'styled-components';
import CloudImg from './cloud_img.png';
import { Add, ArrowDropDown, ArrowRight, DateRange, KeyboardArrowRightOutlined, NotificationAddOutlined, SearchOutlined } from '@mui/icons-material';
import MoneyImg from './money-bag-xxl.png';
import MoneyGrowth from './money-growth.png';
import analysisImg from './analysis.png';


export const Nav = styled.nav`
  background-color: white;
  padding: 10px 20px;
  height: 16%;
  width: 100%;
  position: fixed; 
  top: 0; 
  left: 0;
  right: 0;
`;

export const DayName = styled.div`
  font-size: 12px;
  margin-bottom: 0px;
  font-weight: bold;
`;
export const WeatherLocation = styled.div`
  margin-top: 5px;
   
  font-size: 8px;
  color: #888;
  text-align: left;
  margin-right: 0px;
  margin-top: 0px;

`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8px;
  justify-content: space-between;
  flex-direction: row; 
  justify-content: flex-start;
`;

export const TempText = styled.h3`

`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  margin-left: 0px;
  color: #37393d;
  margin-top: 2px;
  /* font-size: 20px; */
  width: 100%;
  background-color: white;
`;

export const IconsProfile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0px;
  /* font-size: 20px; */
  width: 70%;
  background-color: white;
`;

export const BottomProfile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0px;
  margin-top: 2px;
  width: 100%;
  background-color: white;
`;

export const LeftComponent = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background-color: white;
    text-align: left;
    align-items: center;
    margin-left: 15%;
    justify-content: space-between;
    flex-direction: column; 
    justify-content: flex-start;
`;


export const HeaderText = styled.h3`
  font-size: 30px;
  text-align: center;
  margin-left: 10px;
  margin-bottom: 0px;
  margin-top: 0px;
`;

export const WeatherImg = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-image: url(${CloudImg});
    background-size: cover;
    margin-left: 20px;
`;

export const ProfileList = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  width: 100%;
  background-color: white;
  
`;


export const BottomProfileList = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10px;
  width: 100%;
  height: 100%;
  background-color: white;
  
`;

export const WelcomeContainer = styled.div`
  width: 15%;
  background-color: white;
`;


export const WeatherList = styled.div`
  display: flex;
  align-items: flex-start;
  /* text-align: left; */
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  width: 10%;
  height: 100%;
  background-color: white;
  
`;

export const SalesList = styled.div`
  display: flex;
  align-items: flex-start;
  /* text-align: left; */
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  /* width: 10%; */
  height: 100%;
  background-color: white;
  
`;

export const ProfileName = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
export const ProfileRole = styled.div`
  margin-top: 5px;
   
  font-size: 12px;
  color: #888;
  text-align: left;
  margin-right: 0px;
`;

export const RightComponent = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background-color: white;
    text-align: right;
    align-items: flex-end;
    margin-right: 5%;
    justify-content: space-between;
    flex-direction: row; 
    justify-content: flex-end;
`;




export const IconsRightComponent = styled.div`
  width: 85%; 
  background-color: white;
  display: flex;
  height: 100%;
  text-align: left;
  align-items: center;
  justify-content: end;
  flex-direction: row; 
  height: 100%;
  margin-right: 5%;
`;

export const IconItemsComponent = styled.div`
    display:flex;
    background-color: white;
    height: 100%;
    width: 15%;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
    margin-right: 5px;

`;
  export const MoneyIcon = styled.div`
    width: 20px;
    height: 20px;
    margin-left: 5px;
    background-image: url(${MoneyImg});
    background-size: cover;
  `;  

  export const MoneyGrowthIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 5px;
  background-image: url(${MoneyGrowth});
  background-size: cover;
  `; 
  export const MoneyAnalysisIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 5px;
  background-image: url(${analysisImg});
  background-size: cover;
`;   


export const ProjectButton = styled.button`
    padding: 5px 5px;
    background-color: white;
    color: #fff;
    /* border: 1px solid #888; */
    /* border-radius: 2px; */
    cursor: pointer;
    margin-right: 5%;
    outline: none;
    border: none;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.1), 0 0 2px rgba(0, 0, 0, 0.1); 
`;

export const SearchInput = styled.input`
    background-color: white;
    height: 100%;
    border: none;
    /* color: #333;  */
    outline: none;
    ::placeholder {
        color: #37393d;
    }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  margin-right: 5%;
  padding: 5px 5px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.1), 0 0 2px rgba(0, 0, 0, 0.1); 
  height: 100%;


`;
export const SearchIcon = styled(SearchOutlined)`
    max-width: 14px;
    margin: 0px;
    background-color: white;
    margin-left: 10px;
    height: 100%;
    margin-right: 10px;
    color: #37393d;
`;
export const CalendarIcon = styled(DateRange)`
    color:  #ffa834 ;
    font-size: 8px;
    max-width: 15px;
    margin-right: 5px;
`;

export const AddIcon = styled(Add)`
    color:  green ;
    font-size: 8px;
    max-width: 15px;
    margin-right: 5px;
`;

export const DateDetails = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2px;
  color: #37393d;
  font-size: 13px;

`;

export const NotificationCircle = styled.div`
    width: 30px;
    height: 30px;
    border: none;
    display: flex;
    align-items: center;
    margin-right: 5%;
    justify-content: center; /* Center the content horizontally and vertically */
    border-radius: 50%;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.1), 0 0 2px rgba(0, 0, 0, 0.1); 


`;

export const NotificationIcon = styled(NotificationAddOutlined)`
    max-width: 16px;
    margin: 0px;
    color: #37393d;

`;

export const RightArrowIcon = styled(KeyboardArrowRightOutlined)`
    max-width: 26px;
    margin: 0px;
    color: #37393d;

`;