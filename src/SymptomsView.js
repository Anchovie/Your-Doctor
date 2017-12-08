import React from 'react';
import IconGrid from './Components/IconGrid';

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
        <p className="Instruction-text">Choose and click all the symptoms that apply to you.</p>
          <IconGrid chosen={this.props.chosen} body={this.props.chosenBody[0]} getIcons={this.props.getIcons} getNames={this.props.getNames} handleIconClick={this.props.handleIconClick} />
        </div>
    )
  }
}
