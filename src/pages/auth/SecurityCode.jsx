import React, { Component } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { FormInput, HelpingText, SubmitBtn, ResetLink, FormCard } from '../../components/auth/FormElements';


export default class SecurityForm extends Component {
    constructor(props) {
        super(props)
        this.state = { value: '' }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        alert(this.state.value)
        event.preventDefault();
    }
    handleChange(event) {
        this.setState({ value: event.target.value })
    }
    render() {
        return (
            <FormCard
                icon={<LockOutlinedIcon />}
                title={"Security Code"}
                components={
                    <form onSubmit={this.handleSubmit}>
                        <FormInput type="text" maxLength="6" label="Code (6 characters)" value={this.state.value} onChange={this.handleChange} />
                        <HelpingText
                            text='If the code is not received within two minutes, press:'
                            component={<a href="#">Send again</a>} />
                        <SubmitBtn text='Continue' />
                        <ResetLink text='Cancel' to='/login' />
                    </form>
                } />
        )
    }
}
