import React from 'react';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import HeartIcon from 'mui-icons/fontawesome/heart';
import DoctorIcon from 'mui-icons/fontawesome/user-md';
import ListIcon from 'mui-icons/fontawesome/th-list';
import logoImage from './img/logo.png';
import Typography from 'material-ui/Typography';


/* PARENTS (called from):
* App.js
*/

export default class LoginView extends React.Component {

  render() {
    return (
      <div className="LoginPage">
        <Grid className="LoginContainer" container spacing={24} justify="center">
          <Grid item className="HeaderContainer" justify="center" xs={12} sm={12} md={12}>
              <img className="Logo-Image" src={logoImage} alt="" />
              <Typography type="display1" className="LogoName">
                Your Doctor
              </Typography>
          </Grid>
          <Grid item className="ListContainer" justify="center" xs={8} sm={5} md={3}>
            <div className="LoginList">
              <ListIcon className="loginIcon"/>
              <Typography type="h3" className="LoginTexts">
                Reserve appointments easily
              </Typography>
            </div>
            <div className="LoginList">
              <DoctorIcon className="loginIcon"/>
              <Typography type="h3" className="LoginTexts">
                Meet your doctor online
              </Typography>
            </div>
            <div className="LoginList">
              <HeartIcon className="loginIcon"/>
              <Typography type="h3" className="LoginTexts">
                Enjoy and feel healthy!
              </Typography>
            </div>
          </Grid>
          <Grid item className="ButtonContainer" spacing={24} justify="center" xs={12} sm={12} md={12}>
            <div className="LoginButton">
              <Link to='/'>
                <Button raised aria-label="Login" color="accent">
                  Login
                </Button>
              </Link>
            </div>
            </Grid>
        </Grid>
      </div>
    );
  }
}
