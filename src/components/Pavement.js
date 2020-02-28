import React from 'react';
import PavementStyle from './styles/PavementStyles';
import PavementBlock from './PavementBlock';

export default class Pavement extends React.Component {
    render() {
        return (
            <PavementStyle>
                <PavementBlock />
                <PavementBlock />
            </PavementStyle>
        );
    }
}