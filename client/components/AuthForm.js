import React from "react";

class AuthForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}

	setEmail(email) {
		this.setState({ email });
	}

	setPassword(password) {
		this.setState({ password });
	}

	render() {
		return (
			<div className="row">
				<form className="col s4">
					<div className="input-field">
						<label>Email</label>
						<input
							placeholder="Email"
							value={this.state.email}
							onChange={(e) => this.setEmail(e.target.value)}
						/>
					</div>
					<div className="input-field">
						<label>Password</label>
						<input
							placeholder="Password"
							type="password"
							value={this.state.password}
							onChange={(e) => this.setPassword(e.target.value)}
						/>
					</div>
					<button className="btn">Submit</button>
				</form>
			</div>
		);
	}
}

export default AuthForm;
