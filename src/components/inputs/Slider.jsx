import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = () => ({
    root: {
        width: "inherit",
      },
    thumb: {
        color:"#CF9FFF",
        marginTop: -2
    },
    track: {
        height: 8,
        borderRadius: 4,
      },
      rail: {
        height: 8,
        borderRadius: 4,
      },
    slider:{
        color:"mediumpurple",
        
    }
});



class RangeSlider extends React.Component {
    constructor(){
        super();
        this.state = {
            value: 50
        }
    }
    handleChange = (event, newValue) => {
        const {scope} = this.props;
        scope.setState({distance: newValue});
        this.setState({value: newValue});
    }  
    render(){
        const {classes} = this.props;
        return (
            <div className={classes.root}>
              <Slider
                className={classes.slider}
                value={this.state.value}
                onChange={this.handleChange}
                valueLabelDisplay="on"
                aria-labelledby="range-slider"
                classes={{
                    thumb:classes.thumb,
                    track:classes.track,
                    rail:classes.rail
                }}
              />
            </div>
          );
    }
}

const WithStylesSlider = withStyles(useStyles)(RangeSlider);


export default WithStylesSlider;