import React from "react";
import styled from "styled-components";
import {getStarRating} from "../../service/StarRating";
import {Title} from "./Title";
import {Word} from "./Word";

const InfoBoxContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    border: 1px solid;
`;

const ImagePane = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    height: 100%;
    min-width: 150px;
    max-width: 150px;
    border-right: 1px solid;
`;

const Image = styled.img`
    position: relative;
    width: 100%;
    max-width: 150px;
`;

const TextPanel = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 20px 20px 20px;
`;

const TextPanelTitle = styled(Title)`
    letter-spacing: -1px;
    color: ${props => props.theme.lighter};
    margin: 0;
    padding 0;
`;

const StyledStarRating = styled.a`
    color: orange
    letter-spacing: 3px;
    margin-left: 10px;
`;

const TextPanelText = styled(Word)`
    line-height: 2;
    word-wrap: normal;
    text-overflow: ellipsis;
    overflow: auto;
`;


interface props {
    content: InfoBoxContent[]
    index: number
}

export interface InfoBoxContent {
    imageSource: string
    title: string
    rating?: number
    text: string
}

// TODO: css file

export const InfoBox: React.FC<props> = (props) => {

    const currentItem = props.content[props.index];

    return (
        <InfoBoxContainer>
            <ImagePane>
                <Image src={currentItem.imageSource}/>
                <br />
                <TextPanelTitle>
                    {currentItem.title}
                </TextPanelTitle>
                {currentItem.rating &&
                    <div>
                        <b>Knowledge:</b><br/>
                        <StyledStarRating>
                            {getStarRating(currentItem.rating)}
                        </StyledStarRating>
                    </div>
                }
            </ImagePane>

            <TextPanel>
                <TextPanelText>
                    {currentItem.text}
                </TextPanelText>
            </TextPanel>
        </InfoBoxContainer>
    )

};