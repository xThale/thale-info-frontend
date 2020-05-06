import styled from "styled-components";
import {Title} from "../../common/Title";
import {Word} from "../../common/Word";

export const MainTitle = styled(Title)`
    font-size: 50px;
    letter-spacing: -1px;
`;

export const SubTitle = styled(MainTitle)`
    align-self: flex-start;
    font-size: 30px;
    letter-spacing: -1px;
    margin-top: 20px;
    color: ${props => props.theme.light}
`;

export const SlideText = styled(Word)`
    line-height: 2;
    word-wrap: normal;
    text-overflow: clip;
    overflow: auto;
    text-align: justify;
`;