import styled from 'styled-components';
import logo from './dashboard_logo.png';
import AvatarImg from './man-with-pink-wig-medium-shot.jpg';
import { ArrowDropDown } from '@mui/icons-material';

export const MainComponent = styled.div`
  width: 15%;
  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column; 
  justify-content: flex-start;
  padding-left: 10px;
  z-index: 999;
  
`;

export const LeftComponent = styled.div`
    height: 60%;
    width: 100%;
    background-color: white;
    text-align: left;
    align-items: center;
`;


export const HeaderText = styled.h3`
  font-size: 12px;
  text-align: left;
  margin-left: 50px;
  margin-bottom: 0px;
  color: #888;
  margin-top: 0px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-left: 20px;
  cursor: pointer;
  margin-left: 25px;
  color: #37393d;
  margin-top: 20px;
  font-size: 13px;
`;


export const ColoredMenuItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-left: 20px;
  cursor: pointer;
  margin-left: 25px;
  color:  #297aca;
  margin-top: 20px;
  font-size: 13px;
  font-weight: bold;
`;

export const IconWrapper = styled.div`
  margin-right: 10px;
`;

export const RightComponent = styled.div`
    height: 30%;
    width: 100%;
    background-color: white;
    text-align: left;
    align-items: center;
`;

export const BottomComponent = styled.div`
    height: 15%;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0px; 

`;

export const LogoComponent = styled.div`
    width: 100px;
    height: 100px;
    background-image: url(${logo});
    background-size: cover;
    padding-left: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  text-align: left;
  flex-direction: row;


`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3px;
  padding-left: 2px;
  margin-left: 2px;
  color: #37393d;
  margin-top: 2px;
  font-size: 10px;

`;


export const ProfileImage = styled.img`
  width: 35px;
  height: 35px; 
  border-radius: 50%; 
  background-image: url(${AvatarImg});
  background-size: cover;
  
`;

export const ProfileName = styled.div`
  /* margin-left: 10px;  */
  font-size: 14px;
  width: 150%;

`;



export const ProfileRole = styled.div`
  margin-top: 5px;
   
  font-size: 12px;
  color: #888;
  text-align: left;
  margin-right: 0px;

`;

export const ProfileList = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  flex-direction: column;
  margin-left: 5px;

`;

export const ProfileRoleContainer = styled.div`
  margin-top: 35px;
  padding-right: 20px;
  text-align: left;
  display: flex;
  align-items: flex-start;
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const DropdownIcon = styled(ArrowDropDown)`
  margin-left: 30px;
`;