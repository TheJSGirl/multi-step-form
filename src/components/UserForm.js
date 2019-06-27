import React, {Component} from 'react';

export class UserForm extends Component {
    state = {
        step: 1,
        firtName: '',
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
        return (
            <div>

            </div>
        )
    }
}

export default UserForm;