import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Dots from 'mui-icons/cmdi/dots-vertical';
import { MenuItem, MenuList } from 'material-ui/Menu';
import Grow from 'material-ui/transitions/Grow';
import Paper from 'material-ui/Paper';
import { Manager, Target, Popper } from 'react-popper';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import { Link } from 'react-router-dom';


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
        <header className="App-header">
          <div className="App-title">Your Doctor</div>
          <Manager>
            <Target>
              <IconButton className="Dots-Menu" onClick={this.handleMenuClick}>
                <Dots className="Dots-Icon"/>
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
                      <MenuItem onClick={this.props.handleHelpClick}>Help</MenuItem>
                      <Link to='/login'>
                        <MenuItem>Logout</MenuItem>
                      </Link>
                    </MenuList>
                  </Paper>
                </Grow>
              </ClickAwayListener>
            </Popper>
          </Manager>
        </header>
      </div>
    )
  }
}
