import React from 'react';
import styled, { keyframes } from 'styled-components';

const santaAnimation = keyframes`
    0% {
        transform: rotateZ(5deg);
    } 33% {
        transform: translateY(-15px);
    } 66% {
        transform: rotateZ(-5deg);
    } 100% {
        transform: translateY(0)
    }
`;

const SantaContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 20vh;
    display: flex;
    place-content: center;
    place-items: center;
`;

const SantaStyle = styled.div`
    position: relative;
    max-height: 15vh;
    max-width: 25vw;
    display: flex;
    place-items: center;
    place-content: center;
    animation: ${santaAnimation} 1s linear infinite; 

    & > img {
        max-height: 100%;
        width: 70%;
    }
`;

const Santa = () => (
    <SantaContainer>
        <SantaStyle>
            <img alt="Santa" src="/img/Santa.png"/>
        </SantaStyle>
    </SantaContainer>
);

export default Santa;