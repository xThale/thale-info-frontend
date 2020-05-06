import React from "react";
import styled from "styled-components";
import config from "../../config/Config"
import {HeaderBar} from "../headerbar/HeaderBar";
import {ContentRouting} from "./ContentRouting";

const WebsiteLayout = styled.div`
    display: grid;
    height: 100%;
    
    grid-template-rows: ${config.css.navBarHeight}px auto;
    grid-template-columns: auto;
    grid-template-areas:
         "header"
         "content";
`;

const AreaContainer = styled.div<{areaName: string}>`
    grid-area: ${props => props.areaName};
`;

export const PageLayout: React.FC = () => {

    return(
        <WebsiteLayout>

            {
                // Header Bar
                <AreaContainer areaName={"header"}>
                    <HeaderBar />
                </AreaContainer>
            }

            <ContentRouting />

        </WebsiteLayout>
    )
};