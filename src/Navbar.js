import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover';
import Menu, { MenuItem } from 'material-ui/Menu';
import Dots from 'mui-icons/cmdi/dots-vertical';


export default class Navbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleDotsClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
      anchorOrigin: {horizontal: 'left', vertical: 'bottom'},
      targetOrigin: {horizontal: 'left', vertical: 'top'},
    });
  };

  handleDotsClose = () => {
    this.setState({
      open: false,
    });
  };

  handleHelpClick = () => {
    console.log("help clicked");
  };

  handleLogoutClick = () => {
    console.log("logout clicked");
  }


  render() {
    return (
      <div className="Navbar">
        <IconButton onClick={this.handleDotsClick}>
          <Dots className="Dots-Menu"/>
        </IconButton>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={this.state.anchorOrigin}
          targetOrigin={this.state.targetOrigin}
          onRequestClose={this.handleDotsClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            <MenuItem primaryText="Help" onClick={this.handleHelpClick}/>
            <MenuItem primaryText="Log out" onClick={this.handleLogoutClick}/>
          </Menu>
        </Popover>
      </div>
    )
  }
}
