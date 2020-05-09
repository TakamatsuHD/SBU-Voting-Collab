import React, { Component } from 'react'
import Menu from './screens/MenuScreen';
import VoterStatusScreen from './screens/VoterStatusScreen';
import AbsenteeScreen from './screens/AbsenteeScreen';
import ChatScreen from './screens/ChatScreen';
import RegisterScreen from './screens/RegisterScreen';
import OnCampus from './screens/OnCampus'
import {Button, Icon} from 'react-materialize';





/* This component renders the various different screens 
within the same area. This provides the illusion of changing 
screens while staying on a single webpage.*/
export default class DisplaySwitcher extends Component {
    constructor(props) {
        super(props);
        // first method
        this.state = {page: 'menu'}
      }
    changeScreen = (pagename) =>{
        console.log("Change Screen called to " + pagename);
        this.setState({page: pagename});
    }

    render() {
        if(this.state.page === 'voterStatus'){
            console.log("Loading VoterStatus screen");
            return(
                <div>
                    <Button className = "homeButton" onClick = {(e)=>this.changeScreen("menu")}><Icon>arrow_back_ios</Icon></Button>
                    <VoterStatusScreen changeScreen = {this.changeScreen}/>
                </div>
            )
        }
        else if(this.state.page === 'registerToVote'){
            return(
                <div>
                    <Button className = "homeButton" onClick = {(e)=>this.changeScreen("menu")}><Icon>arrow_back_ios</Icon></Button>
                    <RegisterScreen changeScreen = {this.changeScreen}/>
                </div>
            )
        }
        else if(this.state.page === 'absenteeVoting'){
            return(
                <div>
                    <Button className = "homeButton" onClick = {(e)=>this.changeScreen("menu")}><Icon>arrow_back_ios</Icon></Button>
                    <AbsenteeScreen changeScreen = {this.changeScreen}/>
                </div>
            )
        }
        else if(this.state.page === 'OnCampus'){
            return(
                <div>
                    <Button className = "homeButton" onClick = {(e)=>this.changeScreen("menu")}><Icon>arrow_back_ios</Icon></Button>
                    <AbsenteeScreen changeScreen = {this.changeScreen}/>
                </div>
            )
        }
        else if(this.state.page === 'chat'){
            return(
                <div>
                    <Button className = "homeButton" onClick = {(e)=>this.changeScreen("menu")}><Icon>arrow_back_ios</Icon></Button>
                    <ChatScreen changeScreen = {this.changeScreen}/>
                </div>
            )
        }else{
            console.log("Loading Menu screen");
            return (
                <div>
                    <Menu changeScreen={this.changeScreen}/>
                </div>
            )
        }
    }
}
