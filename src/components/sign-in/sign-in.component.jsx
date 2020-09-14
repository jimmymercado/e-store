import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';


class SignIn extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	handleChange = event => {
		const {value, name} = event.target;

		this.setState({[name]:value});
	}

	handleReset = event => {
		event.preventDefault();

		//this.setState({email:'', password:''})
	}

	handleSubmit = event => {
		event.preventDefault();

		alert('submit not yet coded')
	}

	render(){
		return(
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit} onReset={this.handleReset}>
					<FormInput type='email ' name='email' value={this.state.email}  handleChange={this.handleChange} label='Email' required/>
					<FormInput type='password' name='password' value={this.state.email} handleChange={this.handleChange} label='Password' required/>
					<div className='buttons'>
						<CustomButton type='submit'>Sign In</CustomButton> 
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
					</div>
				</form>
			</div>
		)
	}

}

export default SignIn;