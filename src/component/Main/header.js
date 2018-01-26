import './header.css';
import React, { Component } from 'react';
import { Icon } from 'react-fa';


class MainHeader extends Component{
    render(){
        return(

            <header className = 'top-header'>
                    <HeaderTop />
                    <HeaderBottom />
            </header>

        );
    }
}

function HeaderTop(){
    return(
        <div className="header__top">
            <div className="header__column">
                <i className="fa fa-fighter-jet"></i>
                <i className="fa fa-wifi"></i>
            </div>
            <div className="header__column">
                <span className="header__time">18:38</span>
            </div>
            <div className="header__column">
                <i className="fa fa-moon-o"></i>
                <i className="fa fa-bluetooth-b"></i>
                <span className="header__battery">66% <i className="fa fa-battery-full"></i></span>
            </div>
        </div>
    );
}

function HeaderBottom(){
    return(
        <div className="header__bottom">
            <div className="header__column">
                <span className="header__text">Manage</span>
            </div>
            <div className="header__column">
                <span className="header__text">Friends <span className="header__number">1</span></span>
            </div>
            <div className="header__column">
                <i className="fa fa-cog fa-lg"></i>
            </div>
        </div>
    );
}

export default MainHeader;