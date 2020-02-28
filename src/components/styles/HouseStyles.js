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

    & > img {
        height: 35vh;
    }
`;

export default HouseStyle;