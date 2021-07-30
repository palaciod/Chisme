import React from "react";
import SubmitButton from "../buttons/SubmitButton";
function CaseButton(props){
    let {submitStyles, buttonListener, outerSubmitStyles, scope, title, direction} = props;
   return(
    <div key={`${title}Button`} className={outerSubmitStyles}>
            <SubmitButton fields={scope.state} scope={scope} clickListener={buttonListener} title={title} innerButtonStyles={submitStyles} style={{padding:"5px", float:`${direction}`}}/>
    </div>
   );
}

export default CaseButton;