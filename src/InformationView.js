import React from 'react';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

/* PARENTS (called from):
* ReservationView.js
*/

export default class InformationView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    return (
        <div className="Information-view-content">
            <p> This is information view ! </p>
        </div>
    )
  }
}
