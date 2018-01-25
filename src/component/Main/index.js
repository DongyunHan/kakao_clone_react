import React, { Component } from 'react';
import MainHeader from './header'
import MainMain from './body'




class MainPage extends Component {
    render() {
        return (
            <div>
                <MainHeader />
                <MainMain />
            </div>
        );
    }
}

export default MainPage;
