import React from "react";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Drawer, IconButton} from "@material-ui/core";
class MenuButton extends React.Component{
    constructor(){
        super();
        this.state = {
            anchor: false
        }
        this.wrapper = React.createRef();
    }

    openMenu = () => {
        this.setState({anchor: true});
    }

    closeMenu = () => {
        this.setState({anchor: false});
    }

    render(){
        const {outMenuStyles, menuButtonStyles, direction, menu} = this.props;
        return(
        <div className={outMenuStyles}>
            <IconButton ref={this.wrapper} onClick={this.openMenu} className={menuButtonStyles}>
                <MoreHorizIcon/>
            </IconButton>
            <Drawer ref={this.wrapper} anchor={direction} open={this.state.anchor} onClose={this.closeMenu}>
                     {/* Here is where I will insert the menu label... */}
                     {menu}
            </Drawer>
        </div>
    );
    }
}

export default MenuButton;