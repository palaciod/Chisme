import React from "react";
import {withStyles} from "@material-ui/core/styles";
import ButtonGroups from "../buttons/ButtonGroups";
import ScoreLabel from "../labels/ScoreLabel";
import MenuButton from "../buttons/MenuButton";
import MenuView from "../views/menu/MenuView";
import { connect } from "react-redux";
import { setPosts } from "../../redux/posts/PostsAction";
import PostModel from "../../models/PostModel";
  const useStyles = () => ({
    section: {
        backgroundColor:"mediumpurple",
        padding:"20px",
        display:"flex"
      },
      buttonGroups:{
          margin:"auto",
          width:"300px"
      },
      scorelabel:{
          padding:"10px",
          color:"white",
          fontWeight:"600",
          fontSize:"25px"
      },
      menuButtonStyles:{
          color:"white",
      },
});



class NavBar extends React.Component{
    constructor(){
        super();
        this.state = {
            posts: []
        }
    }
    
    getPosts = async(value) => {
        try{
            const {currentLocation, setPosts} = this.props;
            const long = currentLocation.currentLocation.long;
            const lat = currentLocation.currentLocation.lat;
            const {accessToken} = this.props.accessToken;
            if(value === "POPULAR"){
                const posts = await PostModel.getNearByPosts(long, lat, "new", "160934", accessToken);
                setPosts({currentPosts: posts});
                this.setState({posts: posts});
            }else{
                const posts = await PostModel.getNearByPosts(long, lat, "popular", "160934", accessToken);
                setPosts({currentPosts: posts});
                this.setState({posts: posts});
            }
        }catch(error){
            console.log(error);
        }
    }

    render(){
        const {classes, hideOptions} = this.props;
        return(
            <div className={classes.section}>
                <ScoreLabel score={1133} classStyles={classes.scorelabel}/>
                <div className={classes.buttonGroups}>
                    <div hidden={hideOptions}>
                    <ButtonGroups onClick={(event) => this.getPosts(event.state.activeButton)} titles={["POPULAR", "NEW"]} clickedButton={"POPULAR"} clickedButtonStyle={{backgroundColor:"white", color: "mediumpurple"}} buttonNotClickedStyle={{backgroundColor:"mediumpurple", color: "white"}}/>
                    </div>
                </div>
                <MenuButton menuButtonStyles={classes.menuButtonStyles} direction={"right"} menu={<MenuView />}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentLocation: state.user.currentLocation,
    accessToken: state.user.accessToken
});

const mapDispatchToProps = dispatch => ({
    setPosts: posts => dispatch(setPosts(posts)),
})

const withStylesNavBar = withStyles(useStyles)(NavBar);

export default connect(mapStateToProps, mapDispatchToProps)(withStylesNavBar);