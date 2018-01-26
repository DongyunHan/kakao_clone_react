import React, { Component } from 'react';
import MainHeader from './header';
import MainMain from './body';
import './searchbar.css';
import { Link } from 'react-router-dom';


function SearchBar(){
    return(
        <div className="search-bar">
            <div className="bar__column">
                <Link to="/">
                    <i className="fa fa-users"></i>
                </Link>
            </div>

            <div className="bar__column">
                <i className="fa fa-comment"></i>
            </div>
            <div className="bar__column">
                <i className="fa fa-newspaper-o"></i>
            </div>
            <div className="bar__column">
                <i className="fa fa-star-o"></i>
            </div>
            <div className="bar__column">
                <i className="fa fa-ellipsis-h"></i>
            </div>
        </div>
    );
}

class MainPage extends Component {
    render() {
        return (
            <div>
                <MainHeader />
                <SearchBar />
            </div>
        );
    }
}

export default MainPage;
