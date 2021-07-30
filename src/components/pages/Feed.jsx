import React from "react";
import NavBar from "../templates/NavBar";
import { withStyles } from "@material-ui/styles";
import NewPostButton from "../buttons/NewPost";
import PostTemplate from "../templates/PostTemplate";
import { connect } from "react-redux";
import { setPosts } from "../../redux/posts/PostsAction";
import { setLocation } from "../../redux/user/UserAction";
import CircularProgress from '@material-ui/core/CircularProgress';
import PostModel from "../../models/PostModel";

const useStyles = (theme) => ({
    progress: {
        color: "mediumpurple",
        margin: "auto",
        marginTop:"50px",
        marginLeft:"47%"
    },
    
});

class Feed extends React.Component{
    constructor(){
        super();
        this.state = {
            posts: []
        }
    }
    componentDidMount(){
        this.getPosts();
    }

    getCoords = async () => {
        const {setLocation} = this.props;
        const pos = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        setLocation({currentLocation: {long: pos.coords.longitude, lat: pos.coords.latitude}});
        return {
          long: pos.coords.longitude,
          lat: pos.coords.latitude,
        };
      };
    
    getPosts = async () => {
        try{
          const {setPosts} = this.props;
          const pos = await this.getCoords();
          const accessToken = this.props.accessToken.accessToken
          const posts = await PostModel.getNearByPosts(pos.long, pos.lat, "popular", "160934", accessToken);
          setPosts({currentPosts: posts});
          this.setState({posts: posts});
        }catch(error){
          console.log(error);
        }
    }
    
    render(){
        const {currentUser, accessToken, currentPosts, classes} = this.props;
        switch(currentPosts){
            case null:
                return(
                    <div>
                        <NavBar />
                        <CircularProgress color="secondary" className={classes.progress} size={100}/>
                        <div style={{position:"fixed", bottom:"0", right:"0"}}>
                            <NewPostButton />
                        </div>
                    </div>
                );
                
            default:
                return(
                    <div>
                        <NavBar />
                        {currentPosts.currentPosts.map( post => {
                            
                            return (
                                <div key={post.userid + post.post_id} style={{marginTop:"20px"}}>
                                    <PostTemplate data={post} token={accessToken} user={currentUser}/>
                                </div>
                            );
                        })}
                        <div style={{position:"fixed", bottom:"0", right:"0"}}>
                            <NewPostButton />
                        </div>
                    </div>
                );
        }
    }
}


const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    currentPosts: state.posts.currentPosts,
    accessToken: state.user.accessToken
});

const mapDispatchToProps = dispatch => ({
    setLocation: coordinate => dispatch(setLocation(coordinate)),
    setPosts: posts => dispatch(setPosts(posts)),
})

const withStylesFeed = withStyles(useStyles)(Feed)


export default connect(mapStateToProps, mapDispatchToProps)(withStylesFeed);