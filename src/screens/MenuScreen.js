import React, { Component } from 'react'
import {Button} from 'react-materialize';
export default class Menu extends Component {
    // This is the main menu holding the buttons which redirect to other screens.
    render() {
        return (
            <div className = "buttonHolder">
                <Button id = "checkYourVoter" className = "menuButton" onClick = {(e)=>this.props.changeScreen('voterStatus')}>Check your Voter Status</Button>
                <Button id = "registerToVote" className = "menuButton" onClick = {(e)=>this.props.changeScreen('registerToVote')}>Register to Vote</Button>
                <Button id = "absenteeVoting" className = "menuButton" onClick = {(e)=>this.props.changeScreen('absenteeVoting')}>Absentee Voting</Button>
                <Button id = "chatWithTeam" className = "menuButton" onClick = {(e)=>this.props.changeScreen('chat')}>Chat with a Team Member</Button>
            </div>
        )
    }
}
