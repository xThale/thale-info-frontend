import React from "react";
import styled from "styled-components";
import {Button} from "../../common/Button";
import {Word} from "../../common/Word";

interface Props {
    onNext: () => void
    onPrev: () => void
    onLeechOnly: () => void
    leechOnlyIsPressed: boolean
    current: number
    max: number
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    flex-direction: column;
    
    align-self: left;
    
    min-width: 150px;
    width: 250px;
    height: 100%;
    
    border-left: 1px solid;
    border-right: 1px solid;
    margin-left: 20px;
    margin-right: 20px;
    
`;

const NavigationContainer = styled.div`
    display: flex;
    width: 100%;
`

const NavigationButton = styled(Button)<{left? : boolean, top?: boolean, half?: boolean, big?: boolean}>`
    width: 100%;
    ${props => props.big && `min-height: 80px;`}
    ${props => props.left && `border-right: 1px solid white;`}
    ${props => props.top && `border-top: 1px solid white;`}
`

export const CardControlBar: React.FC<Props> = (props) => {

    const {onNext, onPrev, onLeechOnly, leechOnlyIsPressed, current, max} = props;

    return (
        <Container>
            <NavigationContainer>
                <NavigationButton onClick={onPrev} highlight left>
                    Back
                </NavigationButton>
                <NavigationButton onClick={onNext} highlight>
                    Next
                </NavigationButton>
            </NavigationContainer>
            <NavigationButton onClick={onLeechOnly} highlight top big pressed={leechOnlyIsPressed}>
                Leech only
            </NavigationButton>
            <Word>
                {(current ?? 0)} / {(max ?? 0)}
            </Word>
        </Container>
    )
}