import React from 'react';
import IconButton from 'material-ui/IconButton';
import DotsIcon from 'mui-icons/cmdi/dots-vertical';
import Menu, { MenuItem } from 'material-ui/Menu';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Home from 'mui-icons/cmdi/home';

/* PARENTS (called from):
* App.js
*
*
*/

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };
  }

  handleMenuClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ anchorEl: null });
  };


  render() {
    const open = Boolean(this.state.anchorEl);
    const classname = (this.props.location === "/") ? "App-header-main" : "App-header";
    return (
      <div className="Navbar">
        <AppBar className={classname}>
          <Toolbar>
            {this.props.location !== "/" &&
              <Link to='/'>
                <IconButton color="contrast">
                  <Home className="Home-icon"/>
                </IconButton>
              </Link>
            }
            <Typography type="title" color="inherit" className="App-title">
              <Link to='/' className="Navbar-title">
                Your Doctor
              </Link>
            </Typography>
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenuClick}
                color="contrast"
              >
                <DotsIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={this.state.anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onRequestClose={this.handleRequestClose}
              >
                <MenuItem onClick={this.handleRequestClose}>Help</MenuItem>
                <Link to='/login'>
                  <MenuItem onClick={this.handleRequestClose}>Logout</MenuItem>
                </Link>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
