import React from "react";
import {withStyles} from "@material-ui/core/styles";
import RightSide from "../views/PostRightView";
import FullPostTemplate from "./posts/FullPostTemplate";
import DialogButton from "../buttons/DIalogButton";
import SaveButton from "../buttons/SaveButton";
import PostModel from "../../models/PostModel";

const useStyles = () => ({
    section: {
        width:"1000px",
        height:"250px",
        backgroundColor:"white",
        margin:"auto",
        borderRadius:"10px",
        '&:hover':{
            borderColor:"#CF9FFF",
            borderStyle:"solid",
            borderWidth:"2px",
            borderRadius:"13px",
            cursor: "pointer"
        }
    },
    grid:{
        display:"inline-flex",
        width:"inherit",
        position:"relative"
    },
    rightSide:{
        position:"absolute",
        right:"0",
        marginRight:"40px",
    },
    save:{
        display:"absolute",
        marginLeft:"-80%",
        marginTop:"19.3%"
    }
});


class PostTemplate extends React.Component{
    constructor(){
        super();
        this.state = {
            score: 0,
            vote: 0
        }
    }
    // Ugly code.. try to clean it up later....
    vote = async (id) => {
        const {data, token, user} = this.props;
        const post_id = data.post_id;
        const userID = user.currentUser.data._id + "";
        const accessToken = token.accessToken;
        try{
            let idInt = parseInt(id);
            if(idInt === this.state.vote){
                this.setState({score: this.state.score - idInt, vote: 0});
                await PostModel.deleteVote(post_id,userID,accessToken);
                await PostModel.updateScore(post_id, this.state.score, accessToken);
            }else{
                if(this.state.vote === 0){
                    this.setState({score: this.state.score + idInt, vote: idInt});
                    await PostModel.updateScore(post_id,this.state.score + idInt, accessToken);
                    if(idInt === -1) idInt = 0; // Cheap solution
                    await PostModel.deleteVote(post_id,userID,accessToken);
                    await PostModel.vote(post_id, userID, idInt, accessToken);
                }else{
                    this.setState({score: this.state.score + (idInt * 2), vote: idInt});
                    await PostModel.updateScore(post_id, this.state.score + (idInt * 2), accessToken);
                    if(idInt === -1) idInt = 0;// Cheap solution
                    await PostModel.deleteVote(post_id,userID,accessToken);
                    await PostModel.vote(post_id, userID, idInt, accessToken);
                }
            }
        }catch(error){
            console.log(error);
        }
    }

    didUserVote = async (post_id, userID, token) => {
        try{
            const vote = await PostModel.getVote(post_id, userID, token);
            switch(vote.post_like){
                case true:
                    this.setState({vote: 1});
                    return;
                case false: 
                    this.setState({vote: -1});
                    return;
                default:
                    return;

            }
        }catch(error){
            console.log(error);
        }
    }

    componentDidMount(){
        const {data, token, user} = this.props;
        this.setState({score: data.score});
        this.didUserVote(data.post_id,user.currentUser.data._id + "",token.accessToken);
    }

    render(){
        const {classes, data, token, user} = this.props;
        return(
            <div className={classes.section}>
                <div className={classes.grid} >
                    <DialogButton data={data} buttonType={"postTemplate"} dialogView={<FullPostTemplate scope={this} user={user} token={token} data={data}/>}/>
                    <RightSide user={user} token={token} data={data} score={this.state.score} scope={this} classStyles={classes.rightSide}/>
                    {/* This is a cheap solution to add this button without triggering the post template full view */}
                    <div className={classes.save}>
                        <SaveButton />
                    </div>
                </div>
            </div>
        );
    }
}

const withStylesPostTemplate = withStyles(useStyles)(PostTemplate);

export default withStylesPostTemplate;