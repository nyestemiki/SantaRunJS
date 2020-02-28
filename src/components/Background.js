import React from 'react';
import styled from 'styled-components';
import BackgroundBlock from './BackgroundBlock';

const BackgroundStyle = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
`;

const Background = ()  => (
    <BackgroundStyle>
        <BackgroundBlock/>
        <BackgroundBlock/>
    </BackgroundStyle>
);

export default Background;