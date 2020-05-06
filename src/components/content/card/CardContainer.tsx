import React, {SyntheticEvent} from "react";
import {Card} from "../../../model/Deck";
import styled from "styled-components";
import {Button} from "../../common/Button";

interface Props {
    card: Card
    turned: boolean
    onClick: () => void
    onLeechClick: () => void
}


const Container = styled.div<{isLeech?: boolean}>`
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    width: 80%;
    height: 80%;
    
    font-size: 25px;
    
    padding: 20px;
    
    
    ${props => (props.isLeech && `border: 1px solid gold;`) || "border: 1px solid;"}
    
    margin: 20px;
    cursor: pointer;
    -moz-box-shadow:    inset 0 0 3px #000000;
    -webkit-box-shadow: inset 0 0 3px #000000;
    box-shadow:         inset 0 0 3px #000000;
`;

export const CardContainer: React.FC<Props> = (props) => {

    const {card, turned, onClick, onLeechClick} = props;

    let content : string | undefined;

    if (!turned) {
        content = card?.front ?? "[EMPTY FRONT]"
    } else {
        content = card?.back ?? "[EMPTY BACK]"
    }

    return (
        <Container onClick={onClick} isLeech={card?.leech ?? false}>
            <div dangerouslySetInnerHTML={{ __html: content}}/>
            <Button onClick={test}>Mark as leech</Button>
        </Container>
    )

    function test(e : SyntheticEvent<EventTarget>) {
        e.stopPropagation()
        onLeechClick()
    }

}