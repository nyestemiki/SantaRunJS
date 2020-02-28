import React from 'react';
import HousesStyle from './styles/HousesStyles';
import House from './House';

export default class Houses extends React.Component {
    render() {
        return (
            <HousesStyle>
                <House nr="1"/>
                <House nr="1"/>
                <House nr="1"/>
                <House nr="1"/>
                <House nr="1"/>
                <House nr="1"/>
                <House nr="1"/>
                <House nr="1"/>
                <House nr="1"/>
                <House nr="1"/>
                <House nr="1"/>
            </HousesStyle>
        );
    }
}