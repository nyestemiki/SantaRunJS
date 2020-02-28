import React from 'react';
import BackgroundStyle from './styles/BackgroundStyles';
import BackgroundBlock from './BackgroundBlock';

export default class Background extends React.Component {

    render() {
        return (
            <BackgroundStyle>
                <BackgroundBlock/>
                <BackgroundBlock/>
            </BackgroundStyle>
        );
    }
}