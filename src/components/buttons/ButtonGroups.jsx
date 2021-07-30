import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { withStyles } from '@material-ui/core/styles';

const useStyles = () => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
});

class ButtonGroups extends React.Component {
    constructor(){
        super();
        this.state = {
            activeButton: "" // default value
        }
    }

    componentDidMount(){
        const {clickedButton} = this.props;
        this.setState({
            activeButton: clickedButton
        });
    }

    handleClick = (value) => {
        const {onClick, scope} = this.props;
        const activeButton = this.state.activeButton;
        if(activeButton !== value){
            this.setState({activeButton: value});
            if(onClick !== undefined && scope !== undefined) onClick(scope); 
            if(onClick !== undefined && scope === undefined) onClick(this); 
        }
        
    }


    render(){
        const {classes, titles, styles, clickedButtonStyle, buttonNotClickedStyle} = this.props;
        return(
            <div className={classes.root} style={styles} hidden={true}>
                <ButtonGroup variant="outlined" color="inherit" fullWidth={true}>
                    {titles.map( title => (
                        <Button 
                        style={ this.state.activeButton === title ? clickedButtonStyle : buttonNotClickedStyle} // If the active button is equal to the current title in the array then give it the clicked button style
                        onClick={(event) => {this.handleClick(event.target.outerText)}} // Here update active button state if the button is clicked
                        key={title}
                        >
                            {title}
                        </Button>
                    ))}
                    
                </ButtonGroup>
            </div>
        );
    }
}

const WithStylesButtonGroups = withStyles(useStyles)(ButtonGroups);

export default WithStylesButtonGroups;