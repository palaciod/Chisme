import axios from "axios";
class CommentModel {
    static postComment = async (post_id, userID, comment, token) =>{
        try{
            const res = await axios.post("http://localhost:8080/post/comment", 
            {  
              post_id: post_id,
              userID: userID,
              comment: comment
            },
            {headers:{"authorization": `bearer ${token}`}},
            {
              withCredentials: true
            });
            console.log(res);
        }catch(error){
            console.log(error);
        }
    }

    static getComments = async (post_id, token, scope) => {
        try{
          const res = await axios.get("http://localhost:8080/post/comments",{
            headers:{"authorization": `bearer ${token}`},
            params: {
                post_id: post_id
            }
          },
          {
            withCredentials: true
          });
          scope.setState({comments: res.data});
          console.log(res.data);
          return res.data;
        }catch(error){
          console.log(error);
        }
    }
    
}



export default CommentModel;