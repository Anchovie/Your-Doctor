import React from 'react';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';

/* PARENTS (called from):
* BodyView.js
* SymptomView.js
*/

export default class IconGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  getNames = (x,i) => {this.props.getNames(x,i);};

  isChosen = (i) => {
    if (this.props.chosen.indexOf(i) === -1){
      return 'Grid-Icon';
    } else {
      return 'Grid-Icon chosen';
    }
  }

  render() {
    const icons = this.props.getIcons(this.props.body);
    return(
      <Grid className={"IconGrid"} container spacing={24}>
        { icons.map((Icon, i) =>
        <Grid item key={i} xs={4} lg={3} >
          <Grid container direction="column" justify="center" alignItems="center" style={{textAlign: "center"}}>
            <Grid item xs={12}>
              <Avatar
                className={this.isChosen(i)}
                sizes='100'
                src={Icon}
                onClick={()=>this.props.handleIconClick(i)}
              />
            </Grid>
            <Grid item xs={12} style={{paddingBottom: "5px", paddingTop: "0px"}}>
              <label className={"label_"+this.isChosen(i)} htmlFor={this.isChosen(i)}> {this.props.getNames(this.props.body,i)} </label>
            </Grid>
          </Grid>
        </Grid>
        )}
      </Grid>
    )
  }
}
