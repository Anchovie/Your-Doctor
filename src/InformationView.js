import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import ArrowRightIcon from 'mui-icons/cmdi/arrow-right';
import Hidden from 'material-ui/Hidden'

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

            {/*Desktop*/}
            <Hidden mdDown implementation="css">
                <div className="Information-details" >
                    <TextField
                        id="info-duration"
                        label="How long have your symptoms lasted?"
                        helperText="e.g. 5 days"
                        style={{width: '25%'}}
                        onChange={this.props.handleTextChange('duration')}
                    />
                </div>
                <div>
                    <TextField
                        id="info-details"
                        label="Give more details if you want:"
                        multiline
                        style={{width:'50%'}}
                        onChange={this.props.handleTextChange('extraInfo')}
                    />
                </div>
            </Hidden>
            {/*Mobile*/}
            <Hidden mdUp>
                <div className="Information-details" >
                    <TextField
                        id="info-duration"
                        label="How long have your symptoms lasted?"
                        helperText="e.g. 5 days"
                        fullWidth
                        onChange={this.props.handleTextChange('duration')}
                    />
                </div>
                <div>
                    <TextField
                        id="info-details"
                        label="Give more details if you want:"
                        multiline
                        fullWidth
                        onChange={this.props.handleTextChange('extraInfo')}
                    />
                </div>
            </Hidden>
            <br />
            <div>
                <Button className="PulseButton" raised color="primary" float="right" onClick={this.props.handleNextClick}>
                Next
                <ArrowRightIcon className="Arrow-right-icon"/>
                </Button>
            </div>

        </div>
    )
  }
}
