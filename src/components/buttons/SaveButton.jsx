import React from "react";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import {withStyles} from "@material-ui/core/styles"
import { IconButton } from '@material-ui/core';


const useStyles = () => ({
    section:{
        color:"purple"
    }
});

class SaveButton extends React.Component {
    constructor(){
        super();
        this.state = {
            save: false
        }
    }
    save = () => {
        const saveValue = this.state.save;
        this.setState({save: !saveValue});
    }
    render(){
        const {classes} = this.props;
        switch(this.state.save){
            case true :
                return(
                    <IconButton className={classes.section} onClick={this.save}>
                        <BookmarkIcon />
                    </IconButton>
                );
            default :
                return(
                <IconButton className={classes.section} onClick={this.save}>
                    <BookmarkBorderIcon />
                </IconButton>
            );      
        }
    }
}

const WithStylesSaveButton = withStyles(useStyles)(SaveButton);

export default WithStylesSaveButton;