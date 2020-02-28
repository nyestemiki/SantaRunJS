import React from 'react';
import styled from 'styled-components';
import PavementBlock from './PavementBlock';

const PavementStyle = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    height: 6.5vh;
`;

const Pavement = () => (
    <PavementStyle>
        <PavementBlock />
        <PavementBlock />
        <PavementBlock />
        <PavementBlock />
    </PavementStyle>
);

export default Pavement; 