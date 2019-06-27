import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {

    continue = (e) => {
        e.preventDefault();
        //process form
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values: { email, lastName, occupation, city, bio }} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <List>
                        {/* <ListItem 
                            primaryText="First Name"
                            secondaryText = {firstName}
                        /> */}
                        <ListItem 
                            primaryText="Last Name"
                            secondaryText = {lastName}
                        />
                        <ListItem 
                            primaryText="Occupation"
                            secondaryText = {occupation}
                        />
                        <ListItem 
                            primaryText="Email"
                            secondaryText = {email}
                        />
                        <ListItem 
                            primaryText="City"
                            secondaryText = {city}
                        />
                        <ListItem 
                            primaryText="Bio"
                            secondaryText = {bio}
                        />
                    </List>
                    <br/>
                    <RaisedButton 
                        label="Confirm & Continue"
                        primary={true}
                        style={StyleSheet.button}
                        onClick={this.continue}
                    />
                    <RaisedButton 
                        label="Back"
                        primary={false}
                        style={StyleSheet.button}
                        onClick={this.back}
                    />
                </React.Fragment>

            </MuiThemeProvider>
        )
    }
}

const style = {
    button: {
        margine: 15
    }
}

export default Confirm;