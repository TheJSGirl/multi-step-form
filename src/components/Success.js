import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { pink100 } from 'material-ui/styles/colors';

export class Success extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" style={style.root.color}/>
                    <h1>Thank You For your submission</h1>
                    <p>You will get an email for further instructions</p>
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

export default Success;