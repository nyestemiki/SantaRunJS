import React from 'react';
import styled from 'styled-components';
import Background from './Background';
import Pavement from './Pavement';
import Houses from './Houses';
import Santa from './Santa';
import Gift from './Gift';
import GiftCounter from './GiftCounter';

const GameStyle = styled.div`
    height: 100vh;
    width: 200vw;
`;

export default class Game extends React.Component {
    state = {
        gifts: 0,
        throwing: false
    }

    throwingGift = 'null'
    
    throwGift = () => {
        this.setState({ throwing: true });

        // Hit detection
        this.throwingGift = setInterval(() => {
            // Gift Coordinates
            let gift = document.querySelector('.gift_object');
            let giftRect = gift.getBoundingClientRect();
            let giftCoord = {
                top: giftRect.top,
                bottom: giftRect.bottom,
                left: giftRect.left,
                right: giftRect.right,
            }
            let giftMiddleX = (giftCoord.left + giftCoord.right) / 2;
            let giftMiddleY = (giftCoord.top + giftCoord.bottom) / 2;

            // Chimney coordinates
            let houses = document.querySelectorAll('.house_object');
            let chimnieCoords = [];
            houses.forEach(house => {
                let houseRect = house.getBoundingClientRect();
                chimnieCoords.push({
                    top: houseRect.top,
                    bottom: houseRect.top*1.1,
                    left: houseRect.left*1.05,
                    right: houseRect.left*1.2
                });
            });

            // Detecting collision
            chimnieCoords.forEach(chimney => {
                // Gift vertically in line with a chimney
                if (giftMiddleY > chimney.top && giftMiddleY < chimney.bottom) {
                    // Gift horizontally in line with a chimney
                    if (giftMiddleX > chimney.left && giftMiddleX < chimney.right) {
                        this.setState({
                            gifts: this.state.gifts + 1
                        })

                        this.thrownGift();
                    }
                }
            });
        }, 1);
    }

    thrownGift = () => {
        this.setState({ throwing: false });
        clearInterval(this.throwingGift);
    }

    componentDidMount() {
        // Throw gift on click
        document.addEventListener('click', this.throwGift);
        // Re-initialize gift object, once it is fallen
        document.querySelector('.gift_object').addEventListener('animationend', this.thrownGift);
    }

    render() {
        return (
            <GameStyle>
                <Background/>
                <Pavement/>
                <Houses/>
                <Santa/>
                <Gift throwing={this.state.throwing}/>
                <GiftCounter/>
            </GameStyle>
        );
    }
}