import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../queries/CurrentUser";
import mutation from "../mutations/Logout";

const Header = ({ data, mutate }) => {
	console.log("data from Header.js: ", data);

	const onLogoutClick = () => {
		mutate({
			refetchQueries: [{ query }],
		});
	};

	const renderButtons = () => {
		if (data.loading) {
			return <div>LOOADDInggG.....</div>;
		}

		if (data.user) {
			return (
				<li>
					<a onClick={onLogoutClick}>Logout</a>
				</li>
			);
		} else {
			return (
				<div>
					<li>
						<Link to="/signup">Signup</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
				</div>
			);
		}
	};

	return (
		<nav>
			<div className="nav-wrapper">
				<Link to="/" className="brand-logo left">
					Home
				</Link>
				<ul className="right">{renderButtons()}</ul>
			</div>
		</nav>
	);
};

export default graphql(mutation)(graphql(query)(Header));
