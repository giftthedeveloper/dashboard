import styled from 'styled-components';
import logo from './dashboard_logo.png';


export const MainComponent = styled.div`
  width: 15%;
  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column; 
  justify-content: flex-start;
  padding-left: 10px;
  
`;

export const LeftComponent = styled.div`
    height: 60%;
    width: 100%;
    background-color: white;
    text-align: left;
    align-items: center;
`;


export const HeaderText = styled.h3`
  font-size: 14px;
  text-align: left;
  margin-left: 30px;
  margin-bottom: 0px;
  color: #37393d;
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
  font-size: 15px;
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
    height: 10%;
    width: 100%;
    background-color: white;
    text-align: left;
    align-items: center;
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