import React from 'react';
import styled, { keyframes } from 'styled-components';

const giftAnimation = keyframes`
    from {
        transform: translateY(0) translateX(0);
    } to {
        transform: translateY(100vh) translateX(-25vw);
    }
`;

const GiftContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 20vh;
    display: flex;
    place-content: center;
    place-items: center;
`;

const GiftStyle = styled.div`
    position: relative;
    max-width: 4vw;
    max-height: 8vh;
    bottom: 0;
    left: -11%;
    display: ${p => p.throwing ? 'block' : 'none'};
    animation: ${giftAnimation} 1s ease-in;

    & > img {
        height: 100%;
        width: 100%;
    }
`;

export default class Gift extends React.Component {
    render() {
        return (
            <GiftContainer>
                <GiftStyle throwing={this.props.throwing} className="gift_object">
                    <img alt="Gift" src="/img/Gifts/Gift1.png"/>
                </GiftStyle>
            </GiftContainer>
        );
    }
}