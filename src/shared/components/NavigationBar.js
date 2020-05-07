import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Tree from "./utilities/tree";
import {Grid, Button} from "@material-ui/core";
import withAuthenication from "../../server/firebase/Authenication/Authen";
import {compose} from "recompose";
import withAuthentication from "../../server/firebase/Authenication/Authen";
import {AuthUserContext, withFirebase} from "../../server/firebase/context";

const styles = {
	root: {
		flexGrow: 1,
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
	tree: {
		width: 45,
		height: 45,
		flexGrow: 1,
	},
};

class MenuAppBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			auth: false,
			anchorEl: null,
			top: 2,
		};
		this.handleMenu = this.handleMenu.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.updateTop = this.updateTop.bind(this);
		this.scrollDown = this.scrollDown.bind(this);
	}

	componentDidMount() {
		console.log(window);
	}

	scrollDown() {}

	updateTop() {
		this.setState({top: window.pageYOffset}, this.scrollDown());
	}

	handleChange(event) {
		this.setState({auth: event.target.checked});
	}

	handleMenu(event) {
		this.setState({anchorEl: event.currentTarget});
	}

	handleClose() {
		this.setState({anchorEl: null});
	}

	render() {
		const {classes} = this.props;
		const {auth, anchorEl} = this.state;
		const open = Boolean(anchorEl);

		return (
			<AuthUserContext.Consumer>
				{(authUser) => (
					<div className={classes.root}>
						<AppBar id="navbar" position="sticky" color="secondary">
							<Toolbar>
								<IconButton href="/profile">
									<div className={classes.tree}>
										<Tree hands="#0C47A1" leaves="#fc7d00" />
									</div>
								</IconButton>
								<div style={{flex: 1}}></div>
								{authUser && (
									<div>
										<IconButton aria-owns={open ? "menu-appbar" : undefined} aria-haspopup="true" onClick={this.handleMenu} color="inherit">
											<AccountCircle />
										</IconButton>
										<Menu
											id="menu-appbar"
											anchorEl={anchorEl}
											anchorOrigin={{
												vertical: "top",
												horizontal: "left",
											}}
											transformOrigin={{
												vertical: "top",
												horizontal: "left",
											}}
											open={open}
											onClose={this.handleClose}>
											<MenuItem onClick={this.props.firebase.doSignOut}>Sign out</MenuItem>
										</Menu>
									</div>
								)}
								{!auth && (
									<div>
										<a href="/login">
											<Typography variant="h4" className={classes.grow}></Typography>
										</a>
									</div>
								)}
							</Toolbar>
						</AppBar>
					</div>
				)}
			</AuthUserContext.Consumer>
		);
	}
}

MenuAppBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles), withAuthentication, withFirebase)(MenuAppBar);
