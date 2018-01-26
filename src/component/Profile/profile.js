import React,{ Component } from 'react';
import { Icon } from 'react-fa';
import './profile.css';
import MainHeader from '../Main/header';

function ProfileHeader({profileName, profileImage}){
    return(
        <header className="profile__header">
            <div className="profile__header-container">
                {profileImage ?
                    <img src={profileImage} alt=""/>
                    :<img src="images/avatar.jpg" alt=""/>
                }
                    <h3 className="profile__header-title">{profileName}</h3>
            </div>
        </header>
    );
}

function ProfileInfo(){
    return(
        <div className="profile__container">
            <input type="text" placeholder="itnicolasme@gmail.com" />
                <div className="profile__actions">
                    <div className="profile__action">
                                      <span className="profile__action-circle">
                                          <i className="fa fa-comment fa-lg"></i>
                                      </span>
                        <span className="profile__action-title">My Chatroom</span>
                    </div>
                    <div className="profile__action">
                                      <span className="profile__action-circle">
                                          <i className="fa fa-pencil fa-lg"></i>
                                      </span>
                        <span className="profile__action-title">Edit Profile</span>
                    </div>
                </div>
        </div>
    );
}

class Profile extends Component{
    render(){

        console.log(this.props);
        return(
            <div>
                <MainHeader />
                <main className="profile">
                    <ProfileHeader profileName = {this.props.name} profileImage = {this.props.image}/>
                    <ProfileInfo />
                </main>
            </div>
        );
    }
}

export default Profile;