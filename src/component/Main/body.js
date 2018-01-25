import './body.css';
import React, {Component} from 'react';

function CallFriend({friendName, tagLine}){
    return(
        <div className="friends__section-rows">
            <div className="friends__section-row with-tagline">

                <div className="friends__section-column">
                    <img src={require("../images/avatar.jpg")} alt="" />

                    <span className="friends__section-name">{friendName}</span>
                </div>

                {tagLine? (
                        <span className="friends__section-tagline">
                            {tagLine}
                        </span>)
                    :null
                }
            </div>
        </div>
    )
}

function CallSection({sectionName}){
    return(
            <header className="friends__section-header">
                <div className="friends__section-title">{sectionName}</div>
            </header>
    );
}

function SearchBar(){
    return(
        <div className="search-bar">
            <i className="fa fa-search">vzvadfsv</i>
            <input type="text" placeholder="Find friends, chats, Plus Friends" />
        </div>
    );
}

function SectionProfile(){
    return(
        <section className="friends__section" >
            <CallSection sectionName="My Profile" />
            <CallFriend friendName="Apink" tagLine="Apink Love"/>
        </section>
    );
}

function SectionRecommendFriends(){
    return(
        <section className="friends__section">
            <CallSection sectionName="Recommended Friends" />
            <CallFriend  friendName="Twice" tagLine="" />
        </section>
    );
}

function SectionFriends(){
    return(
        <section className="friends__section">
            <CallSection sectionName="Friends"  />
            <CallFriend friendName= "HanDongyun" tagLine="Studying react" />
            <CallFriend friendName= "YUKIE" tagLine="Loving" />
        </section>
    );
}

function SectionGroups(){
    return(
        <section className="friends__section">
            <CallSection sectionName="Groups"  />
            <CallFriend friendName= "Ivader" tagLine="Fucking Hot Visualization!!" />
        </section>
    );

}

export default class MainMain extends Component{
    render(){
        return(
            <main className="friends">
                <SearchBar />
                <SectionProfile />
                <SectionRecommendFriends />
                <SectionGroups />
                <SectionFriends />
            </main>
        );
    }
}