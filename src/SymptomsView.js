import React from 'react';
import IconGrid from './IconGrid';

/* PARENTS (called from):
* ReservationView.js
*/

export default class SymptomsView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    return (
        <div className="Symptoms-view-content">
            <p> This is symptoms view ! </p>
            <IconGrid chosen={this.props.chosen} getIcons={this.props.getIcons} handleIconClick={this.props.handleIconClick} />
        </div>
    )
  }
}