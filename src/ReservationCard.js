import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
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

const styles = theme => ({
  card: {
    maxWidth: 400,
    width: 350,
    padding: '10px',
    //border: '10px solid transparent',
    margin: 'auto auto',
    overflow: 'auto',
    backgroundImage: "url(" + CardBackground + ")",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundSize: '80px 80px'
  },
  media: {
    height: 194,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  flexGrow: {
    flex: '1 1 auto',
  }
});


class ReservationCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  //console.log("Reservation card props:");
  //console.log(this.props);

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;
    return (
      <Card raised={true} className={classes.card}>
          <CardHeader
            title="Videopuheluaika"
            subheader={this.props.data.date +'\n'+  this.props.data.doctor}
          />
          <CardContent>
            <Typography component="p">
              Doctor: {this.props.data.doctor}
            </Typography>
            <Typography component="p">
              Symptoms: {this.props.data.symptoms}
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton aria-label="Videochat">
              <VideoIcon />
            </IconButton>
            <Link to='/appointment/:1'>
              <Button className="Videochat-button" fab color="primary">
                <VideoIcon />
              </Button>
            </Link>
            <div className={classes.flexGrow} />
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph type="body2">
                Oireet: päänsärky, vatsakipu.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
    );
  }


}

ReservationCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReservationCard);
