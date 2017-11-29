import React from 'react';
import IconGrid from './IconGrid';

export default class ConfirmationView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    return (
        <div className="Confirmation-view-content">
            <p> This is confirmation view ! </p>
            <IconGrid />
        </div>
    )
  }
}