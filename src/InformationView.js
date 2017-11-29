import React from 'react';
import IconGrid from './IconGrid';

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
            <IconGrid />
        </div>
    )
  }
}