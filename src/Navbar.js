import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import DotsIcon from 'mui-icons/cmdi/dots-vertical';
import Menu, { MenuItem, MenuList } from 'material-ui/Menu';
import Grow from 'material-ui/transitions/Grow';
import Paper from 'material-ui/Paper';
import { Manager, Target, Popper } from 'react-popper';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';


export default class Navbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleMenuClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };


  render() {
    return (
      <div className="Navbar">
        <AppBar position="static" className="App-header">
          <Toolbar>
            <Typography type="title" color="inherit" className="App-title">
              Your Doctor
            </Typography>
            <div>
              <IconButton
                aria-owns={this.state.open ? 'menu-appbar' : null}
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
                open={this.state.open}
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
