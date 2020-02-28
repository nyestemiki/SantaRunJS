import styled, { keyframes } from 'styled-components';

const blockAnimation = keyframes`
    from {
        transform: translateX(0);
    } to {
        transform: translateX(-100%);
    }
`;

const BackgroundBlockStyle = styled.div`
    height: 100vh;
    position: relative;

    animation: ${blockAnimation} 30s linear infinite;

    & > img {
        height: 100%;
    }
`;

export default BackgroundBlockStyle;