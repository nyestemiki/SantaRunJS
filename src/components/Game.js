import React from 'react';
import styled from 'styled-components';
import Background from './Background';
import Pavement from './Pavement';
import Houses from './Houses';
import Santa from './Santa';
import Gift from './Gift';

const GameStyle = styled.div`
    height: 100vh;
    width: 200vw;
`;

export default class Game extends React.Component {
    state = {
        gifts: 0,
        throwing: false
    }

    throwGift = () => {
        this.setState({ throwing: true });
    }

    thrownGift = () => {
        this.setState({ throwing: false });
    }

    componentDidMount() {
        document.addEventListener('click', this.throwGift);
        document.querySelector('.gift_object').addEventListener('animationend', this.thrownGift);
    }

    render() {
        return (
            <GameStyle>
                <Background/>
                <Pavement/>
                <Houses/>
                <Santa/>
                <Gift throwing={this.state.throwing}/>
            </GameStyle>
        );
    }
}