import React from "react";
import {withStyles} from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
const useStyles = () => ({
    button:{
        padding:"25px"
    },
    text:{
        paddingLeft:"10px"
    }
});

class MenuSelection extends React.Component{

    click = () => {
        const {clickListener, currentUser} = this.props;
        clickListener(this);
    }

    render(){
        const {menuTitle, icon, classes} = this.props;
        return(
            <div className={classes.section}>
                <Button className={classes.button} onClick={this.click}>
                    {icon}
                    <span className={classes.text}>{menuTitle}</span>
                </Button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    accessToken: state.user.accessToken,
  });

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user)),
    setToken: token => dispatch(setToken(token))
})

const WithRouterMenuSelection = withRouter(MenuSelection);

const WithStylesMenuSelection = withStyles(useStyles)(WithRouterMenuSelection);



export default connect(mapStateToProps, mapDispatchToProps)(WithStylesMenuSelection);