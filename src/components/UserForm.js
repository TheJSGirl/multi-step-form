import React, {Component} from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';

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

    //Proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    }

    //GO back to previous step

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value})

    }

    render() {
        const {step} = this.state;
        const {firstName, lastName, city, bio, email, occupation} = this.state;
        const values = {firstName, lastName, city, bio, email, occupation}; 
        switch(step) {
            case 1:
            return (
                <FormUserDetails 
                    nextStep = {this.nextStep}
                    handleChange= {this.handleChange}
                    values = {values}
                />
            )
            case 2: 
                return (
                    <FormPersonalDetails 
                        nextStep = {this.nextStep}
                        handleChange={this.handleChange}
                        values = {values}
                        prevStep = {this.prevStep}
                    />
                )
            case 3: 
                return <h1>Confirm </h1>
            case 4: 
                return <h1>Sucess </h1>
        }
    }
}

export default UserForm;