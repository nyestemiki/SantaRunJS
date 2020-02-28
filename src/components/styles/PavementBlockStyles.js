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
    animation: ${pavementAnimation} 12s linear infinite;
`;

export default PavementBlockStyle;