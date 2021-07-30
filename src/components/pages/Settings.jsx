import React from "react";
import NavBar from "../templates/NavBar";
import {makeStyles} from "@material-ui/core/styles";
import GeneralForm from "../forms/GeneralForm";
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



const options = ["buttongroup", [["MAXIMUM DISTANCE", "DELETE ACCOUNT"], "MAXIMUM DISTANCE", deleteAccountSettings]];
const fields = [options, ["slider","Distance Filter"], ["button","Update", updateSettings]];

function deleteAccountSettings(scope){
    options[1][2] = distanceSettings;
    fields.pop();
    fields.pop();
    fields.push(["textfield","Type ' DELETE '"]);
    fields.push(["button","DELETE ACCOUNT", deleteAccount]);
    scope.forceUpdate();
}

function distanceSettings(scope){
    options[1][2] = deleteAccountSettings;
    fields.pop();
    fields.pop();
    fields.push(["slider","Distance Filter"]);
    fields.push(["button","Update", updateSettings]);
    scope.forceUpdate();
}   

function deleteAccount(scope){
    console.log(scope);
}

function updateSettings(scope){
    console.log(scope);
}

function Settings(){
    const classes = useStyles();
    return(
        <div>
            <NavBar hideOptions={true}/>
            <GeneralForm fields={fields} innerStyles={classes.innerStyles} outerStyles={classes.outerStyles} submitStyles={classes.submitStyles} outerSubmitStyles={classes.outerSubmitStyles} buttonGroupStyles={classes.buttonGroupStyles} direction={"left"}/>
        </div>
    );
}

export default Settings;