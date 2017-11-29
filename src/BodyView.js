import React from 'react';
import IconGrid from './IconGrid';

/* PARENTS (called from):
* ReservationView.js
*/

export default class BodyView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
        <div className="Body-view-content">
            <p>This is body view ! </p>
            <IconGrid chosen={this.props.chosen} body={true} getIcons={this.props.getIcons} handleIconClick={this.props.handleIconClick} />
        </div>
    )
  }
}
