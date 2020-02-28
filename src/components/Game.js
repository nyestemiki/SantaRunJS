import React from 'react';
import GameStyle from './styles/GameStyles';
import Background from './Background';

export default class Game extends React.Component {
    render() {
        return (
            <GameStyle>
                <Background />
            </GameStyle>
        );
    }
}