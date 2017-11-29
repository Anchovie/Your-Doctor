import React from 'react';
import IconGrid from './IconGrid';

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
            <IconGrid />
        </div>
    )
  }
}