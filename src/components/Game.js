import React from 'react';
import styled from 'styled-components';
import Background from './Background';
import Pavement from './Pavement';
import Houses from './Houses';
import Santa from './Santa';

const GameStyle = styled.div`
    height: 100vh;
    width: 200vw;
`;

export default class Game extends React.Component {
    render() {
        return (
            <GameStyle>
                <Background/>
                <Pavement/>
                <Houses/>
                <Santa/>
            </GameStyle>
        );
    }
}