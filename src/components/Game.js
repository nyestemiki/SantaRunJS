import React from 'react';
import GameStyle from './styles/GameStyles';
import Background from './Background';
import Pavement from './Pavement';
import Houses from './Houses';

export default class Game extends React.Component {
    render() {
        return (
            <GameStyle>
                <Background />
                <Pavement />
                <Houses />
            </GameStyle>
        );
    }
}