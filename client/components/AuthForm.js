import React from "react";

class AuthForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
		this.onSubmit = this.onSubmit.bind(this);
	}

	setEmail(email) {
		this.setState({ email });
	}

	setPassword(password) {
		this.setState({ password });
	}

	onSubmit(event) {
		event.preventDefault();
		const { email, password } = this.state;
		if (typeof this.props.onSubmit === "function") {
			this.props.onSubmit({ email, password });
		}
	}

	render() {
		return (
			<div className="row">
				<form onSubmit={this.onSubmit} className="col s4">
					<div className="input-field">
						<input
							placeholder="Email"
							value={this.state.email}
							onChange={(e) => this.setEmail(e.target.value)}
						/>
					</div>
					<div className="input-field">
						<input
							placeholder="Password"
							type="password"
							value={this.state.password}
							onChange={(e) => this.setPassword(e.target.value)}
						/>
					</div>
					<div className="errors">
						{this.props.errors.map((error) => (
							<div key={error}>{error}</div>
						))}
					</div>
					<button className="btn">Submit</button>
				</form>
			</div>
		);
	}
}

export default AuthForm;
