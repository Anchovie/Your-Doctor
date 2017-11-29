import React from 'react';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

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

            <div className="Duration-content">
                <Typography type="subheading" component="h2">
                    Duration
                </Typography>
                <Typography type="body1" component="p">
                    How many days have your symptoms lasted?
                </Typography>
                <TextField />
            </div>
            <div className="Free-text-container">
                <Typography type="subheading" component="h2">
                    Details
                </Typography>
                <Typography type="body1" component="p">
                    You can give more details here:
                </Typography>
                <TextField multiline />
            </div>
        </div>
    )
  }
}