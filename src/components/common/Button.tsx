import styled from 'styled-components'

interface props {
    inverted?: boolean
    bold?: boolean
    highlight?: boolean
    pressed?: boolean
}

export const Button = styled.button<props>`

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0px;
  padding: 10px;

  cursor: pointer;
  outline: none;

  background: ${props =>
    (!props.inverted && props.theme.dark) ||
    (props.inverted && 'transparent')
  }
  
  color: ${props =>
    (!props.inverted && 'white') ||
    (props.inverted && props.theme.title)
  }
  
  font-family: ${props => props.theme.fontFamily};
  font-size: 15px;
  
  ${props => props.bold && `font-weight: bold;`}
  
  ${props => (props.inverted || props.highlight) && 
    `:hover {
        color: white;
        background-clip: padding-box;
        transition: .5s ease;
        opacity: 0.95;
        background-color: #A75DB7;
    }`}
    
  ${props => props.pressed && `
        color: white;
        background-clip: padding-box;
        transition: .5s ease;
        opacity: 0.95;
        background-color: #A75DB7;`}
`;