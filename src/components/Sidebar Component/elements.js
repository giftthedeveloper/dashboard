import styled from 'styled-components';
import logo from './dashboard_logo.png';


export const MainComponent = styled.div`
  width: 15%;
  background-color: #333;
  height: 100%;
  display: flex;
  flex-direction: column; 
  justify-content: flex-start;
  padding-left: 10px;
  
`;

export const LogoComponent = styled.div`
    width: 50px;
    background-image: url(${logo});
    background-size: cover;


`;