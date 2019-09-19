import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import anime from "animejs";

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
		if (window.__INITIAL_DATA__.passport) {
			this.setState({auth: true});
		}
		if (__isBrowser__) {
			console.log("here");
			window.addEventListener("scroll", this.updateTop);
		}
	}

	scrollDown() {
		if (this.state.top > 300) {
			const show = anime({
				targets: "#navbar",
				translateY: 70,
			});
		} else {
			const hid = anime({
				targets: "#navbar",
				translateY: 0,
			});
		}
	}

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
			<div className={classes.root}>
				<AppBar style={{top: "-70px"}} id="navbar" positionsticky color="secondary">
					<Toolbar>
						<IconButton className={classes.menuButton} color="default" aria-label="Menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="h4" color="inherit" className={classes.grow}>
							Nisha K Creations
						</Typography>
						{auth && (
							<div>
								<IconButton aria-owns={open ? "menu-appbar" : undefined} aria-haspopup="true" onClick={this.handleMenu} color="inherit">
									<AccountCircle />
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									transformOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									open={open}
									onClose={this.handleClose}>
									<MenuItem onClick={this.handleClose}>Profile</MenuItem>
									<br />
									<MenuItem onClick={this.handleClose}>My account</MenuItem>
								</Menu>
							</div>
						)}
						{!auth && (
							<div>
								<a href="/login">
									<Typography variant="h4" color="inherit" className={classes.grow}>
										Login
									</Typography>
								</a>{" "}
							</div>
						)}
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

MenuAppBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
