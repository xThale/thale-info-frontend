import * as React from "react";
import styled from "styled-components";
import "./animation.css";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {Button} from "./Button";

const ItemContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    min-height: 100%;
    min-width: 100%;
    position: relative;
`;

const TransitionGroupContainer = styled(TransitionGroup)`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    overflow: hidden;
    z-index: 0;
`

interface props {
    index: number
    changeIndex: (newIndex: number) => void
}

// TODO: Mobile View

// TODO: REMOVE
/**
 *
 const [lastScroll, setLastScroll] = useState(new Date().getTime());
 const [deltaTime, setDeltaTime] = useState(500);

 function changeIndex(number: number) {
        const newIndex = props.index + number;

        if (newIndex >= childrenCount) {
            props.changeIndex(0)
        } else if(newIndex < 0) {
            props.changeIndex(childrenCount - 1)
        } else {
            props.changeIndex(newIndex)
        }
    }
 * @param props
 * @constructor
 */

// TODO: TOOD
const SwitchRightButton = styled(Button)`
    position: absolute;
    left: 94%;
    top: 40%;
    height: 20%;
    width: 30px;
`


export const SlidePage: React.FC<props> = (props) => {

    const childrenCount = React.Children.count(props.children);
    const index = props.index < childrenCount ? props.index : childrenCount - 1;

    function switchRight() {
        let newIndex = index + 1;
        if (newIndex >= childrenCount) {
            newIndex = 0;
        }
        props.changeIndex(newIndex)
    }

    return (
        <TransitionGroupContainer>
            {
                childrenCount > 1 ? (
                    <CSSTransition key={index} timeout={1000} classNames={"slide-left"} appear={true}>
                        {props.children &&
                            <ItemContainer>
                                <SwitchRightButton onClick={switchRight}>
                                    >
                                </SwitchRightButton>
                                {React.Children.toArray(props.children)[index]}
                            </ItemContainer>
                        }
                    </CSSTransition>
                ) : (
                    props.children
                )
            }
        </TransitionGroupContainer>
    )
}