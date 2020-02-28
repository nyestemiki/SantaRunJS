import React from 'react';
import styled from 'styled-components';
import House from './House';

const HousesStyle = styled.div`
    position: absolute;
    bottom: 3vh;
    left: 0;
    display: flex;
    width: 100%;
`;

const Houses = () => (
    <HousesStyle>
        <House/>
        <House/>
        <House/>
        <House/>
    </HousesStyle>
);

export default Houses;