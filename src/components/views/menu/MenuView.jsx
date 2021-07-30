import React from "react";
import MenuSelection from "../../buttons/menu/MenuSelectionButton";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AvatarSelection from "../../buttons/menu/AvatarSelectionButton";
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import {makeStyles} from "@material-ui/core/styles";
import UserModel from "../../../models/UserModel";
const useStyles = makeStyles((theme) => ({
    avatar:{
        margin:"auto",
    },
    avatarContainer:{
        padding:"10px",
        paddingTop:"25px"
    }
}));

const menuItems = [
    {title:"Home", icon: <HomeOutlinedIcon/>, clickListener: toHome},
    {title:"Profile", icon: <AccountCircleOutlinedIcon/>, clickListener: toProfile},
    {title:"Saved", icon: <BookmarksOutlinedIcon/>, clickListener: toSavedPosts},
    {title:"History", icon: <HistoryOutlinedIcon/>, clickListener: logout},
    {title:"Drafts", icon: <DescriptionOutlinedIcon/>, clickListener: logout},
    {title:"Settings", icon: <SettingsOutlinedIcon/>, clickListener: toSettings},
    {title:"Sign Out", icon: <ExitToAppIcon/>, clickListener: logout}
];



function toHome(scope){
    scope.props.history.push("/");
}

function toProfile(scope){
    const username = scope.props.currentUser.currentUser.data.username;
    console.log(username);
    scope.props.history.push(`/${username}`);
}

function toSavedPosts(scope){
    scope.props.history.push("/saved");
}

function toSettings(scope){
    scope.props.history.push("/settings");
}

function logout(scope){
    console.log("Log out for me please..");
    UserModel.logout(scope);
    window.location.reload();
}

function MenuView(){
    const classes = useStyles();
    return(
        <div>
            <AvatarSelection classStyles={classes.avatarContainer} avatarStyles={classes.avatar} initials={"DP"}/>
            {menuItems.map( menuItem => (
                <MenuSelection key={menuItem.title} menuTitle={menuItem.title} icon={menuItem.icon} clickListener={menuItem.clickListener}/>
            ))}
        </div>
    );
}

export default MenuView;