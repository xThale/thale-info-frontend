import React from "react";
import styled from "styled-components";
import config from "../../config/Config"
import {HeaderBar} from "../HeaderBar/HeaderBar";
import {Route, Switch} from "react-router";
import {DeckListPage} from "../deck/DeckListPage";
import {NotFound} from "../notfound/NotFound";
import {NavigationBar} from "../NavigationBar/NavigationBar";
import {Footer} from "../footer/Footer";


const Layout = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-template-areas:
        "header"
        "nav"
        "content"
        "footer";
        
    @media (min-width: ${config.media.xsmall}px) {
        grid-template-rows: ${config.css.navBarHeight}px 1fr;
        grid-template-columns: minmax(100px, 250px) 1fr;
        grid-template-areas:
            "header header"
            "nav content";
    }
`;

const HeaderArea = styled.div`
    grid-area: header;
`;

// To not display the components is not the best way, since they are still rendered from react...
const NavArea = styled.div`
    display: flex;
    grid-area: nav;
    
    max-width: 100%;
    min-width: 10px;
    
    min-height: calc(100vh - ${config.css.navBarHeight}px);
    
    @media (max-width: ${config.media.xsmall}px) {
        min-height: 0;
    }
    
`;

const ContentArea = styled.div`
    grid-area: content;
`;

const FooterArea = styled.div`
    grid-area: footer;
    
    margin-top: 10px;
    
    padding: 10px 0px;
    
    -moz-box-shadow:    0px -1px 2px 0px ${config.theme.lighter};
    -webkit-box-shadow: 0px -1px 2px 0px ${config.theme.lighter};
    box-shadow:         0px -1px 2px 0px ${config.theme.lighter};
    
    @media (min-width: ${config.media.xsmall}px) {
        display: none;
    }
`;

export const PageLayout: React.FC = () => {
    return(
        <Layout>

            {
                // Header Bar
                <HeaderArea>
                    <HeaderBar />
                </HeaderArea>
            }


            <Switch>

                {
                    // Deck Page
                    <Route exact path="/">
                        <NavArea>
                            <NavigationBar />
                        </NavArea>
                        <ContentArea>
                            <DeckListPage />
                        </ContentArea>
                    </Route>
                }


                {
                    // Not Found Page
                    <Route path="*">
                        <NotFound />
                    </Route>
                }

            </Switch>

            <FooterArea>
                <Footer />
            </FooterArea>
        </Layout>
    )
};