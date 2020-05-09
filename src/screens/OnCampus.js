import React, { Component } from 'react'
import {Button} from 'react-materialize';
export default class Menu extends Component {
    render() {
        return (
            <div className = "buttonHolder">
              <p>Would you like to register to vote with an on campus address?</p>
                <Button id = "OnCampus" className = "menuButton" onClick ="location.href='https://form.jotform.com/201176351642146';">Yes</Button>
                <Button id = "OffCampus" className = "menuButton" onClick = {(e)=>this.props.changeScreen('registerToVote')}>No</Button>
            </div>
        )
    }
}
