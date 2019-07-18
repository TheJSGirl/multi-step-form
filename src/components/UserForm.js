import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import {prev, next, increment} from '../actions/index';
import Confirm from './Confirm';
import Success from './Success';
export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }


    handleChange = input => e => {
        this.setState({[input]: e.target.value})

    }

    render() {
        
        const {firstName, lastName, city, bio, email, occupation, step} = this.props.root;
        const {prev, next} = this.props
        const values = {firstName, lastName, city, bio, email, occupation}; 
        switch(step) {
            case 1:
            return (
                <FormUserDetails 
                    nextStep = {next}
                    handleChange= {this.handleChange}
                    values = {values}
                />
            )
            case 2: 
                return (
                    <FormPersonalDetails 
                        nextStep = {next}
                        handleChange={this.handleChange}
                        values = {values}
                        prevStep = {prev}
                    />
                )
            case 3: 
                return (
                    <Confirm 
                        values={values}
                        prevStep = {prev}
                        nextStep = {next}
                     />
                )
            case 4: 
                return <Success />
        }
    }
}

function mapStateToProps({data}) {
    return data;
}
export default connect(mapStateToProps, {prev, next, increment})(UserForm);