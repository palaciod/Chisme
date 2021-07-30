import React from "react";
import ButtonGroups from "../buttons/ButtonGroups";
function CaseButtonGroup(props){
    let {buttonGroupStyles, scope, groupOptions, activeOption, clickListener} = props;
   return(
    <div key={`${activeOption}ButtonGroup`} className={buttonGroupStyles}>
            <ButtonGroups titles={groupOptions} clickedButton={activeOption} buttonNotClickedStyle={{backgroundColor:"white", color: "mediumpurple"}} clickedButtonStyle={{backgroundColor:"mediumpurple", color: "white"}} onClick={clickListener} scope={scope}/>
    </div>
   );
}

export default CaseButtonGroup;