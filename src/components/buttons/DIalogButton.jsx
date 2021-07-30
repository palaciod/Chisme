import React from 'react';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DialogTemplate from '../templates/DialogTemplate';
import LeftSide from "../views/PostLeftView";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class DialogButton extends React.Component {

    constructor() {
        super();
        this.state = {
            open: false
        }
    }

    open = () => {
        this.setState({open: true});
    }

    close = () => {
        this.setState({open: false});
    }

    render(){        
        const {buttonType, dialogView, data} = this.props;
        switch(buttonType){
            case 'normal':
                const {buttonTitle} = this.props;
                return(
                    <div>
                        <Button variant="outlined" color="primary" onClick={this.open}>
                            {buttonTitle}
                        </Button>
                    </div>
                );
            case 'fab':
                
                return(
                    <div>
                        <Fab color="secondary" aria-label="edit" onClick={this.open}>
                            <EditIcon />
                        </Fab>
                        <DialogTemplate openState={this.state.open} open={this.open} close={this.close} dialogView={dialogView}/>
                    </div>
                );
            case "postTemplate":
                return(
                    // Width of this size should be inherited so that we can click anywhere on the post to open the dialog
                    <div style={{width:"inherit"}}>
                        <LeftSide data={data} clickListener={this.open}/>
                        <DialogTemplate openState={this.state.open} open={this.open} close={this.close} dialogView={dialogView}/>
                    </div>
                );
            default: 
                return(
                    <div>
                        <Button variant="outlined" color="primary" onClick={this.open}>
                            
                        </Button>
                    </div>
                );
        }
    }
}

export default DialogButton;