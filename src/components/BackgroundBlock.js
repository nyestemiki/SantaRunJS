import React from 'react';
import BackgroundBlockStyle from './styles/BackgroundBlockStyles';

export default class BackgroundBlock extends React.Component {
    render() {
        return (
            <BackgroundBlockStyle>
                <img alt="Backgroud" src="/img/Environment/Sky.png"/>
            </BackgroundBlockStyle>
        );
    }
}