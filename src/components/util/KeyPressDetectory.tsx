import React, {useEffect} from "react";

export interface KeyPressEvent {
    keyName: string
    callback: () => void
}

interface Props {
    events : KeyPressEvent[]
}

export const KeyPressDetector: React.FC<Props> = (props) => {

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener('keydown', downHandler);
        };
    });

    // @ts-ignore
    function downHandler({key}) : any {
        props.events.forEach(event => {
            if (event.keyName === key) {
                event.callback()
            }
        })
    }

    return (
        <React.Fragment >
            {props.children}
        </React.Fragment>
    )
};