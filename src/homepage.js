import React from 'react';
import './home.css';

export default class Home extends React.Component {
    render(){
        return (<div>
            <img className="bg" src={require("./picture/back.jpg")}/>
            <div className="contain">
                
            <h2 className="logo1">Profile|U</h2>
            <p className="sublogo">Your Profile editor</p></div>
            </div>
        );
}
}