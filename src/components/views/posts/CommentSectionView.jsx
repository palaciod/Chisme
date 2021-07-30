import React from "react";
import CommentView from "./CommentView";
import CommentModel from "../../../models/CommentModel";
import {connect} from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from "@material-ui/styles";
const array = [0,1,2,3,4,5,6,7,8];

const useStyles = (theme) => ({
    progress: {
        color: "mediumpurple",
        margin: "auto",
        marginTop:"50px",
        marginLeft:"46%",
        
    },
    
});

class CommentSection extends React.Component{
    constructor(){
        super();
        this.state = {
            comments: []
        }
    }

    componentDidMount(){
        const {postId, accessToken} = this.props;
        const aToken = accessToken.accessToken;
        CommentModel.getComments(postId, aToken, this);
    }

    render(){
        const {data, accessToken, classes} = this.props;
        const aToken = accessToken.accessToken;
        switch(this.state.comments.length){
            case 0:
                return(
                    <div style={{width:"inherit", paddingBottom:"50px"}}>
                        <CircularProgress color="secondary"  className={classes.progress} size={100}/>
                    </div>
                );
            default:
                return(
                    <div>
                        {this.state.comments.map(comment => (
                            <div key={comment.comment_id} id={comment.comment_id}>
                                <CommentView data={data} comment={comment}/>
                            </div>
                        ))}
                    </div>
                );
        }
    }
}

const mapStateToProps = state => ({
    accessToken: state.user.accessToken,
});

const withStylesCommentSection = withStyles(useStyles)(CommentSection);

export default connect(mapStateToProps, null)(withStylesCommentSection)