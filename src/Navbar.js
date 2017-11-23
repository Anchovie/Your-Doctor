import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover';
import Dots from 'mui-icons/cmdi/dots-vertical';
import { MenuItem, MenuList } from 'material-ui/Menu';
import Grow from 'material-ui/transitions/Grow';
import Paper from 'material-ui/Paper';
import { Manager, Target, Popper } from 'react-popper';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';


export default class Navbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleClick = (event) => {
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

  handleHelpClick = () => {
    console.log("help clicked");
  };

  handleLogoutClick = () => {
    console.log("logout clicked");
  }


  render() {
    return (
      <div className="Navbar">
        <Manager>
          <Target>
            <IconButton onClick={this.handleClick}>
              <Dots className="Dots-Menu"/>
            </IconButton>
          </Target>
          <Popper
            placement="bottom-start"
            eventsEnabled={this.state.open}
            className="Menu-list"
          >
            <ClickAwayListener onClickAway={this.handleRequestClose}>
              <Grow in={this.state.open} style={{ transformOrigin: '0 0 0' }}>
                <Paper>
                  <MenuList role="menu">
                    <MenuItem onClick={this.handleHelpClick}>Help</MenuItem>
                    <MenuItem onClick={this.handleLogoutClick}>Logout</MenuItem>
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
        </Manager>
      </div>
    )
  }
}
