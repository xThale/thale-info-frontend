import styled from "styled-components";
import {Button} from "../common/Button";

export const HeaderBarButton = styled(Button).attrs({
    inverted: true,
    bold: true
})`
    height: 100%;
    padding: 0 20px;
    color: ${props => props.theme.navBarTextColor}
`;
