import React, {Component} from 'react';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details" />
                    <TextField 
                        hintText = "Enter your First Name"
                        floatingLabelText = "First Name"
                        onChange = {handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField 
                        hintText = "Enter your Last Name"
                        floatingLabelText = "Last Name"
                        onChange = {handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br/>
                    <TextField 
                        hintText = "Enter your First Email"
                        floatingLabelText = "First Email"
                        onChange = {handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br/>
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={style.button}
                        onClick={this.continue}
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

export default FormUserDetails;