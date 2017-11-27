import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Navbar from './Navbar';
import ResCard from './ReservationCard';
import Button from 'material-ui/Button';
import PlusIcon from 'mui-icons/cmdi/plus';
import { Link } from 'react-router-dom';


const plusStyle = {
  position: 'fixed',
  zIndex: 999,
  right: '37%',
  top: '7%' //Not working obvs

}



export default class MainView extends Component {

  constructor(props) {
    console.log(props);
    super(props);
  }

  render() {
    return (
      <div className="MainView">
        <header className="App-header">
          <Navbar handleHelpClick={this.props.handleHelpClick} handleLogoutClick={this.props.handleLogoutClick}/>
          <div className="App-title">Your Doctor</div>
        </header>
        <Link to='/reservation'>
          <Button className="Add-button" fab color="primary" aria-label="Create new appointment" style={plusStyle} onClick={this.props.handleNewReservationClick}>
            <PlusIcon />
          </Button>
        </Link>
        <div className="MainView-Content">
          <div className="MainView-Spacer"></div>
          <ResCard data={this.props.reservations[0]} />
          <div className="MainView-Spacer"></div>
          <ResCard data={this.props.reservations[1]} />
          <div className="MainView-Spacer"></div>
          <ResCard data={this.props.reservations[1]} />
          <hr className="style2" />
          <ResCard data={this.props.pastReservations[0]} />
          <div className="MainView-Spacer"></div>
        </div>
      </div>
    );
  }
}
