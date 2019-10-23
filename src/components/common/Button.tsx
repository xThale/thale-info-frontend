import styled, {css} from 'styled-components'
import config from "../../config/Config"

interface props {
    invertedButton?: boolean
}

export const Button = styled.button<props>`
  background: ${props =>
    (!props.invertedButton && 'transparent') ||
    (props.invertedButton && config.theme.dark)
  }
  
  color: ${props =>
    (!props.invertedButton && config.theme.title) ||
    (props.invertedButton && 'white')
  }
  
  font-family: ${config.theme.fontFamily};
  font-size: 15px;
  
  
  
  justify-content: center;
  text-align: center;
  
  padding: 0;
  border: 0px;
  padding: 0px 20px;
  
  
  
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