import React from 'react';
import {useSelector} from "../store/types/appState";
import Title from "./common/Title";
import styled from "styled-components";

const Container = styled.div`
    margin: 50px;
`

export const DeckListPage: React.FC = () => {

    const user = useSelector(state => state.auth.user);

    return (
        <Container>
            {user &&
                <Title>
                    Welcome {user.name},
                    You are currently logged in as <img src={user.avatar} width={30} height={30} /> {user.email}
                </Title>
            }
        </Container>
    )

}