import React from 'react';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

export default class ExpandedCardView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  render() {
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
          <Button dense color="primary">
            Cancel
          </Button>
        </CardActions>
      </Card>
    )
  }
}
