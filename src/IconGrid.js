import React from 'react';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import SymptomIcon from './img/corgi.png';


export default class IconGrid extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      chosen: [],
    };
  }

  handleIconClick = (i) => {
    console.log("Icon " + i + " pressed!");
    this.state.chosen.push(i);
  }

  getIcons = () => {
    //This could be passed from parent to handle both grids
    return [SymptomIcon, SymptomIcon, SymptomIcon,
      SymptomIcon,SymptomIcon,SymptomIcon,
      SymptomIcon,SymptomIcon,SymptomIcon,];
  }

  render() {
    const icons = this.getIcons();
    return(
      <Grid container spacing={40}>
        { icons.map((Icon, i) =>
          <Grid key={i} item xs={4} lg={4}>
            <Avatar
              className="Grid-Icon"
              size={100}
              height={100}
              width={100}
              src={SymptomIcon}
              onClick={()=>this.handleIconClick(i)}
            />
          </Grid>
        )}
      </Grid>
    )
  }
}
