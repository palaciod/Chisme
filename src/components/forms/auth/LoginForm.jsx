import React from "react";
import GeneralForm from "../GeneralForm";
import {makeStyles} from "@material-ui/core/styles";
import UserModel from "../../../models/UserModel";
const useStyles = makeStyles((theme) => ({
    outerStyles:{
        width:"600px",
        borderColor:"#CF9FFF",
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



function RegisterFields(scope){
    loginOptions[1][2] = LoginFields;
    fields.pop();
    fields.push(["textfield","re-type password"]);
    fields.push(["textfield","number"]);
    fields.push(["button","Sign Up", UserModel.register]);
    scope.forceUpdate();
}

function LoginFields(scope){
    loginOptions[1][2] = RegisterFields;
    fields.pop();
    fields.pop();
    fields.pop();
    fields.push(["button", "Login", UserModel.login]);
    scope.forceUpdate();
}


const loginOptions = ["buttongroup", [["LOGIN", "SIGN UP"], "LOGIN", RegisterFields]]
const fields = [loginOptions,["textfield","username"], ["textfield","password"], ["button","Login", UserModel.login]];



function LoginForm(){
    const classes = useStyles();
    
    return(
        <div>
            <GeneralForm fields={fields} innerStyles={classes.innerStyles} outerStyles={classes.outerStyles} submitStyles={classes.submitStyles} outerSubmitStyles={classes.outerSubmitStyles} buttonGroupStyles={classes.buttonGroupStyles} direction={"left"}/>
        </div>
    );
}

export default LoginForm