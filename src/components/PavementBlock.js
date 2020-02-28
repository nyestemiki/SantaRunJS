import React from 'react';
import PavementBlockStyle from './styles/PavementBlockStyles';

export default class PavementBlock extends React.Component {
    render() {
        return (
            <PavementBlockStyle>
                <img alt="Pavement" src="/img/Environment/Pavement.png"/>
            </PavementBlockStyle>
        );
    }
}