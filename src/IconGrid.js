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
      <Grid container spacing={40}>
        { icons.map((Icon, i) =>
          <Grid key={i} item xs={4} lg={3}>
            <Avatar
              className={this.isChosen(i)}
              sizes='100'
              src={Icon}
              onClick={()=>this.props.handleIconClick(i)}
            />
          </Grid>
        )}
      </Grid>
    )
  }
}
