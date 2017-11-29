import React, { Component } from 'react';
import Card, { CardHeader, CardMedia, CardTitle, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Button from 'material-ui/Button';

import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'mui-icons/cmdi/chevron-down';
import VideoIcon from 'mui-icons/cmdi/message-video';
import CardBackground from './img/corgi.png';

import CardImage from './img/card.png';
import { Link } from 'react-router-dom';
import CancelDialog from './CancelDialog';


export default class ExpandedCardView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      cancelDialogOpen: false
    };
  }

  handleCancelDialogOpen = () => {
    console.log("boobaaa")
    this.setState({ cancelDialogOpen: true })
  }

  handleCancelRequestClose = () => {
    this.setState({ cancelDialogOpen: false })
  }

  render() {
    const { classes } = this.props;
    return (
      <Card raised={true}>
        <CardContent>
         <Typography type="body1">
            Video appointment
          </Typography>
          <Typography type="headline" component="h2">
            {this.props.data.doctor}
          </Typography>
          <Typography type="body1">
            {this.props.data.occupation}
          </Typography>
          <Typography component="p">
            {this.props.data.date +'\n'+  this.props.data.doctor}
          </Typography>
          <Typography component="p">
            Symptoms: {this.props.data.symptoms}
          </Typography>
        </CardContent>
        <CardActions disableActionSpacing>
          <Button onClick={this.handleCancelDialogOpen} dense color="primary">
            Cancel
          </Button>
          <CancelDialog open={this.state.cancelDialogOpen} handleCancelRequestClose={this.handleCancelRequestClose} />
        </CardActions>
      </Card>
    )
  }
}
