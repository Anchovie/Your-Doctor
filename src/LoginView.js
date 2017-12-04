import React from 'react';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import HeartIcon from 'mui-icons/fontawesome/heart';
import DoctorIcon from 'mui-icons/fontawesome/user-md';
import ListIcon from 'mui-icons/fontawesome/th-list';


/* PARENTS (called from):
* App.js
*/

export default class LoginView extends React.Component {

  render() {
    return (
      <Grid className="LoginPage" container spacing={24} justify="center">
        <Grid item xs={8} sm={6} md={4} justify="center">
          <List>
            <ListItem>
              <ListItemIcon>
                <ListIcon className="loginIcon" />
              </ListItemIcon>
              <ListItemText class="LoginTexts" inset primary="Reserve appointments easily" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoctorIcon className="loginIcon" />
              </ListItemIcon>
              <ListItemText class="LoginTexts" inset primary="Meet your doctor online" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HeartIcon className="loginIcon" />
              </ListItemIcon>
              <ListItemText class="LoginTexts" inset primary="Enjoy and feel healthy!" />
            </ListItem>
          </List>
          <div className="LoginView">
            <Link to='/'>
              <Button raised aria-label="Login" color="accent">
                Login
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    );
  }
}
