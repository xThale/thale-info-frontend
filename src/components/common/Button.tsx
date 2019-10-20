import styled from 'styled-components'
import config from "../../config/Config"


export const Button = styled.button`
  background: transparent;
  
  font-family: ${config.theme.fontFamily};
  font-size: 15px;
  
  justify-content: center;
  text-align: center;
  
  padding: 0;
  border: 0px;
  padding: 0px 20px;
  
  color: ${config.theme.title};
  
  outline:none;
  
  :hover {
        font-weight: bold;
        color: white;
        background-clip: padding-box;
        cursor: pointer;
        transition: .5s ease;
        opacity: 0.95;
        background-color: #A75DB7;
    }
`;