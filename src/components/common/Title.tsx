import styled from "styled-components";
import config from "../../config/Config";

const Title = styled.h2`
    font-family: ${config.theme.fontFamily};
    margin: 0px;
    padding: 0px;
    color: ${config.theme.title};
    letter-spacing: 1px;
`;

export default Title