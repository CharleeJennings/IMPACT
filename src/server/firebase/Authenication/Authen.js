import React from "react";
import {withFirebase, AuthUserContext} from "../context";
import {compose} from "recompose";

const withAuthentication = (Component) => {
	class WithAuthentication extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				authUser: undefined,
			};
		}
		componentDidMount() {
			this.listener = this.props.firebase.auth.onAuthStateChanged((authUser) => {
				authUser ? this.setState({authUser}) : this.setState({authUser: null});
			});
		}
		componentDidmount() {
			this.listener();
		}
		render() {
			return (
				<AuthUserContext.Provider value={this.state.authUser}>
					<Component {...this.props} />
				</AuthUserContext.Provider>
			);
		}
	}
	return compose(withFirebase)(WithAuthentication);
};
export default withAuthentication;
