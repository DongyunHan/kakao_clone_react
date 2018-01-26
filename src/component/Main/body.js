import './body.css';
import React, {Component} from 'react';
import  twiceLogo  from '../images/twiceLogo.jpg';
import  apinkLogo  from '../images/Apink.jpg';
import { Link } from 'react-router-dom';
import Profile from '../Profile/profile'

function CallFriend({friendName, tagLine, imageLogo}){
    return(
        <div className="friends__section-rows">

            <Link to='/profile' params={{name:friendName, image:{imageLogo}} }>

                <div className="friends__section-row with-tagline">
                    <div className="friends__section-column">

                            {imageLogo?
                                (<img src={ imageLogo } alt="" />)
                                : (<img src={ require("../images/avatar.jpg") } alt="" />)
                            }

                        <span className="friends__section-name">{friendName}</span>
                    </div>

                    {tagLine? (
                            <span className="friends__section-tagline">
                                {tagLine}
                            </span>)
                        :null
                    }
                </div>
            </Link>
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



function SectionProfile(){
    return(
        <section className="friends__section" >
            <CallSection sectionName="My Profile" />
            <CallFriend friendName="Apink" tagLine="에이핑크는 사랑입니다." imageLogo = { apinkLogo }/>
        </section>
    );
}

function SectionRecommendFriends(){
    return(
        <section className="friends__section">
            <CallSection sectionName="Recommended Friends" />
            <CallFriend  friendName="Twice" tagLine="" imageLogo= { twiceLogo }/>
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

                <SectionProfile />
                <SectionRecommendFriends />
                <SectionGroups />
                <SectionFriends />
            </main>
        );
    }
}