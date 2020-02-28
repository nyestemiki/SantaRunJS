import React from 'react';
import styled, { keyframes } from 'styled-components';

const houseAnimation = keyframes`
    from {
        transform: translateX(0%);
    } 
    to {
        transform: translateX(-100%);
    }
`;

const HouseStyle = styled.div`
    animation: ${houseAnimation} 1.2s linear infinite;
    position: relative;
    width: 50vw;
    padding-right: 15vw;
    padding-left: 15vw;

    & > img {
        height: 35vh;
    }
`;

const House = () => (
    <HouseStyle>
        <img alt="House" src="/img/Houses/House1.png" className="house_object"/>
    </HouseStyle>
);

export default House;