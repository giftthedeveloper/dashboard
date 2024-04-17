import styled from 'styled-components';
import CloudImg from './cloud_img.png';

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
  padding-left: 2px;
  margin-left: 2px;
  color: #37393d;
  margin-top: 2px;
  font-size: 13px;
`;

export const LeftComponent = styled.div`
    display: flex;
    height: 100%;
    width: 15%;
    background-color: white;
    text-align: left;
    align-items: center;
    margin-left: 15%;
    justify-content: space-between;
    flex-direction: column; 
    justify-content: flex-start;
`;


export const RightComponent = styled.div`
    display: flex;
    height: 100%;
    width: 70%;
    background-color: white;
    text-align: right;
    align-items: center;
    margin-left: 15%;
    justify-content: space-between;
    flex-direction: column; 
    justify-content: flex-end;
`;


export const HeaderText = styled.h3`
  font-size: 30px;
  text-align: center;
  margin-left: 5px;
  margin-bottom: 0px;
  margin-top: 0px;
`;

export const WeatherImg = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-image: url(${CloudImg});
    background-size: cover;
`;

export const ProfileList = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  flex-direction: column;
  margin-left: 10px;
  
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