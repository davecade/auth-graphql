import React, { Component } from "react";
import AuthForm from "./AuthForm";
import mutation from "../mutations/Signup";
import { graphql } from "react-apollo";

class SignupForm extends Component {
	constructor(props) {
		super(props);
		this.state = { errors: [] };
	}

	onSubmit({ email, password }) {
		this.props
			.mutate({
				variables: { email, password },
			})
			.catch((res) => {
				const errors = res.graphQLErrors.map((error) => error.message);
				// Handle the errors as needed
				this.setState({ errors });
			});
	}

	render() {
		return (
			<div>
				<h3>Signup</h3>
				<AuthForm errors={[]} onSubmit={this.onSubmit.bind(this)} />
			</div>
		);
	}
}

export default graphql(mutation)(SignupForm);
