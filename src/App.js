import React from "react";
import {Switch, Route} from "react-router-dom";
import Feed from "./components/pages/Feed";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import Settings from "./components/pages/Settings";
import SavedPosts from "./components/pages/SavedPosts";
import {connect} from "react-redux";
import { setUser } from "./redux/user/UserAction";
import { setToken } from "./redux/user/UserAction";
import UserModel from "./models/UserModel";
import "./App.css";
class App extends React.Component {
  constructor(){
      super();
  }

  componentDidMount(){
    const {currentUser} = this.props;
    if(currentUser === null){
        UserModel.refreshTokenLogin(this);
    }
  }

  render(){
      console.log(this.props);
      return(
          <Switch>
              <Route exact path="/saved" render={() => this.props.currentUser ? (<SavedPosts/>) : (<Login/>)}/>
              <Route exact path="/settings" render={() => this.props.currentUser ? (<Settings/>) : (<Login/>)}/>
              <Route exact path="/:username" render={() => this.props.currentUser ? (<Profile/>) : (<Login/>)}/>
              <Route exact path="/" render={() => this.props.currentUser ? (<Feed/>) : (<Login/>)}/>
              <Route exact path="/login" render={() => this.props.currentUser ? (<Feed/>) : (<Login/>)} />
          </Switch>
      );
  }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user)),
    setToken: token => dispatch(setToken(token))
});



export default connect(mapStateToProps, mapDispatchToProps)(App);