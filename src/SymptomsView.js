import React from 'react';
import IconGrid from './IconGrid';

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
            <IconGrid />
        </div>
    )
  }
}