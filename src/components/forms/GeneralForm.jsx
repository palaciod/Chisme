import React from "react";
import CaseTextField from "./CaseTextField";
import MultiLineTextField from "./CaseMultiLineTextField";
import CaseButton from "./CaseButton";
import CaseSlider from "./CaseSlider";
import ButtonGroups from "../buttons/ButtonGroups";
import {connect} from "react-redux";
import {setUser, setToken} from "../../redux/user/UserAction";
class GeneralForm extends React.Component {
    constructor(){
        super();
    }

    updateTextFields = (stateProp, value) => {
        this.setState({[stateProp] : value});
    }

    render(){
        const {fields, direction, innerStyles, outerStyles, classes} = this.props;
        return(
            <div className={outerStyles} style={{backgroundColor:"white"}}>
               {fields.map((field) => {
                const title = field[1];
                switch(field[0]){
                    case 'button':
                        let {submitStyles, outerSubmitStyles} = this.props;
                        let buttonListener = field[2];
                       return(
                            <CaseButton key={title + "SubmitButton"} scope={this} title={title} direction={direction} submitStyles={submitStyles} buttonListener={buttonListener} outerSubmitStyles={outerSubmitStyles}/>
                       );
                    case 'buttongroup':
                        let {buttonGroupStyles} = this.props;
                        let groupOptions = field[1][0];
                        let activeOption = field[1][1];
                        let clickListener = field[1][2];
                       return(
                            <div key={`${activeOption}ButtonGroup`} className={buttonGroupStyles}>
                                <ButtonGroups titles={groupOptions} clickedButton={activeOption} buttonNotClickedStyle={{backgroundColor:"white", color: "mediumpurple"}} clickedButtonStyle={{backgroundColor:"mediumpurple", color: "white"}} onClick={clickListener} scope={this}/>
                            </div>
                       );
                    case 'textfield' :
                        return(
                            <CaseTextField key={title + "textField"} scope={this} title={title} styles={innerStyles}/>
                        );
                    case 'multiLineTextField':
                        let {textFieldStyles, rows, maxCharLength} = this.props;
                        return(
                            <MultiLineTextField rows={rows} maxCharLength={maxCharLength} key={title + "multiLine"} scope={this} title={title} styles={innerStyles} textFieldStyles={textFieldStyles}/>
                        );
                    case 'slider':
                        return(
                            <CaseSlider key={title+"sliderOuter"} id={title+"sliderOuter"} title={title} scope={this}/>
                        );
                    default: 
                        break;
                }
               })}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentLocation: state.user.currentLocation,
    accessToken: state.user.accessToken,
    currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user)),
    setToken: token => dispatch(setToken(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(GeneralForm);