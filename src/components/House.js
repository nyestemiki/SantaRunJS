import React from 'react';
import HouseStyle from './styles/HouseStyles';

export default class House extends React.Component {
    state = {
        house: "/img/Houses/House"+this.props.nr+".png"
    }
    
    render() {
        return (
            <HouseStyle>
                <img alt="House" src={this.state.house}/>
            </HouseStyle>
        );
    }
}