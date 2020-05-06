import {Route, Switch} from "react-router";
import React from "react";
import {LandingPage} from "../content/landingpage/LandingPage";
import {DeckPage} from "../content/deck/DeckPage";
import {NotFound} from "../notfound/NotFound";
import styled from "styled-components";
import {CardPage} from "../content/card/CardPage";

const AreaContainer = styled.div<{areaName: string}>`
    grid-area: ${props => props.areaName};
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentRouting = () => {

    return(
        <Switch>

            {
                // Landing Page
                <Route exact path="/">
                    <AreaContainer areaName={"content"}>
                        <LandingPage />
                    </AreaContainer>
                </Route>
            }

            {
                // Deck Page
                <Route exact path="/deck">
                    <AreaContainer areaName={"content"}>
                        <DeckPage />
                    </AreaContainer>
                </Route>
            }

            {
                // Card Page
                <Route path="/deck/:uuid">
                    <AreaContainer areaName={"content"}>
                        <CardPage />
                    </AreaContainer>
                </Route>
            }


            {
                // Not Found Page
                <Route path="*">
                    <NotFound />
                </Route>
            }

        </Switch>
    )
};