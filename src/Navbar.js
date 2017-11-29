import React from 'react';
import IconButton from 'material-ui/IconButton';
import DotsIcon from 'mui-icons/cmdi/dots-vertical';
import Menu, { MenuItem } from 'material-ui/Menu';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

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
    return (
      <div className="Navbar">
        <AppBar className="App-header">
          <Toolbar>
            <Typography type="title" color="inherit" className="App-title">
              Your Doctor
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
