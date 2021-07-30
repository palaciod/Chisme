import axios from "axios";
class UserModel {

    static async register(scope){
        const {username, password, number} = scope.state;
        const secondPassword = scope.state['re-type password'];
        try{
            const res = await axios.post("http://localhost:5000/user/register",{
                username: username,
                password: password,
                secondPassword: secondPassword,
                number: number
            },
            {
                withCredentials: true
            }
            );
            await UserModel.login(scope);
            console.log(res);
        }catch(error){
            console.log(error);
        }
    }

    static async login(scope){
        const {username, password} = scope.state;
        const {setToken, setUser} = scope.props;
        try{
            const res = await axios.post("http://localhost:5000/user/login", {
                username: username,
                password: password
            },
            {
                withCredentials: true
            }
            );
            setUser({
                currentUser: res.data.user
              })
            setToken({
                accessToken: res.data.accessToken
            })
        }catch(error){
            console.log(error);
        }
    }


    static async logout(scope){
      const {accessToken} = scope.props.accessToken;
      console.log(`This is aToken: ${accessToken}`);
      try{
        const res = await axios.delete("http://localhost:5000/user/logout/", 
        {
          withCredentials: true
        }
        );
        console.log(res);
      }catch(error){
        console.log(error);
      }
    }


    
    /**
   * Sets the initial state for user upon re-rendering. When token is found but invalid the token will be blacklisted along with the ip address.
   */
   static async refreshTokenLogin(scope){
    const {setToken, setUser} = scope.props;
    try{
      const res = await axios.get("http://localhost:5000/token/login/",{
        withCredentials: true
      });
      setUser({
        currentUser: res.data.user
      })
      setToken({
        accessToken: res.data.accessToken
      })
    }catch(error){
      console.log(error);
    }
  }
}



export default UserModel;