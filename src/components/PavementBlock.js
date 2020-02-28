import React from 'react';
import styled, { keyframes } from 'styled-components';

const pavementAnimation = keyframes`
    from {
        transform: translateX(0);
    } to {
        transform: translateX(-100%);
    }
`;

const PavementBlockStyle = styled.div`
    position: relative;
    animation: ${pavementAnimation} 9s linear infinite;
`;

const PavementBlock = () => (
    <PavementBlockStyle>
        <img alt="Pavement" src="/img/Environment/Pavement.png"/>
    </PavementBlockStyle>
);

export default PavementBlock;