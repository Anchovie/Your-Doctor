import React from 'react';
import IconGrid from './Components/IconGrid';
import Button from 'material-ui/Button';
import ArrowRightIcon from 'mui-icons/cmdi/arrow-right';

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
          <IconGrid chosen={this.props.chosen} body={this.props.chosenBody[0]} getIcons={this.props.getIcons} handleIconClick={this.props.handleIconClick} />
          <Button className="PulseButton" raised color="primary" onClick={this.props.handleNextClick}>
            Next
            <ArrowRightIcon className="Arrow-right-icon"/>
          </Button>
        </div>
    )
  }
}
