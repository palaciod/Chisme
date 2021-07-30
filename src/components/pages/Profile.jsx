import React from "react";
import NavBar from "../templates/NavBar";
import GeneralForm from "../forms/GeneralForm";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    outerStyles:{
        width:"600px",
        borderColor:"white",
        borderStyle:"solid",
        borderWidth:"2px",
        borderRadius:"5px",
        margin:"auto",
        marginTop:"150px"
    },
    innerStyles:{
        padding:"20px",
        paddingTop:"10px"
    },
    submitStyles:{
        padding:"50px",
        color:"white"
    },
    outerSubmitStyles:{
        padding:"20px",
        marginBottom:"30px"
    },
    buttonGroupStyles: {
        padding:"20px"
    }
}));


const options = ["buttongroup", [["CHANGE USERNAME", "CHANGE PASSWORD"], "CHANGE USERNAME", updatePasswordForm]]

const fields = [options, ["textfield","New Username"], ["button","Update", updateProfile]];


function updatePasswordForm(scope){
    console.log(scope);
    options[1][2] = updateUsernameForm;
    fields.pop();
    fields.pop();
    fields.push(["textfield","Old password"]);
    fields.push(["textfield","New password"]);
    fields.push(["textfield","Re-type password"]);
    fields.push(["button","Update", updateProfile]);
    scope.forceUpdate();
}

function updateUsernameForm(scope){
    options[1][2] = updatePasswordForm;
    fields.pop();
    fields.pop();
    fields.pop();
    fields.pop();
    fields.push(["textfield","New-username"]);
    fields.push(["button","Update", updateProfile]);
    scope.forceUpdate();
}

function updateProfile(scope){
    console.log(scope);
}


function Profile(){
    const classes = useStyles();
    return(
        <div>
            <NavBar hideOptions={true}/>
            <GeneralForm fields={fields} innerStyles={classes.innerStyles} outerStyles={classes.outerStyles} submitStyles={classes.submitStyles} outerSubmitStyles={classes.outerSubmitStyles} buttonGroupStyles={classes.buttonGroupStyles} direction={"left"}/>
        </div>
    );
}

export default Profile;