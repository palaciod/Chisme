import axios from "axios";
class PostModel {
    static getNearByPosts = async (long, lat, sort, distance, token) => {
        try{
          const res = await axios.get("http://localhost:8080/post/near",{
            headers:{"authorization": `bearer ${token}`},
            params: {
                long: long,
                lat: lat,
                distance: distance, // The distance should be in redux state
                sort: sort
            }
          },
          {
            withCredentials: true
          });
          return res.data;
        }catch(error){
          console.log(error);
        }
    }

    static vote = async(post_id, userid, post_like, token) => {
      try{
        const res = await axios.post("http://localhost:8080/post/like", {
          post_id: post_id,
          userID: userid,
          post_like: post_like
        },
        {headers:{"authorization": `bearer ${token}`}},
        {
          withCredentials: true
        }
        );
        console.log(res);
      }catch(error){
        console.log(error);
      }
    }

    static getVote = async (post_id, userID, token) => {
      try{
        const res = await axios.get("http://localhost:8080/post/like",{
          headers:{"authorization": `bearer ${token}`},
          params: {
              post_id: post_id,
              userID: userID
          }
        },
        {
          withCredentials: true
        });
        return res.data;
      }catch(error){
        console.log(error);
      }
    }

    static updateScore = async(post_id, score, token) => {
      try{
        const res = await axios.put("http://localhost:8080/post/vote",{
          post_id: post_id,
          score: score,
        },
        {headers:{"authorization": `bearer ${token}`}},
        {withCredentials: true},
        );
        console.log(res);
      }catch(error){
        console.log(error);
      }
    }

    static deleteVote = async (post_id, userid, token) => {
      try{
        const res = await axios.delete("http://localhost:8080/post/delete_like", {
          headers:{"authorization": `bearer ${token}`},
          params: {
            post_id: post_id,
            userID: userid
          }
        },
        {withCredentials: true},
        );
        console.log(res);
      }catch(error){
        console.log(error);
      }
    }

    static newPost = async (title, post, userID, long, lat, token) => {
        try{
          const res = await axios.post("http://localhost:8080/post/new-post", 
          {  
            title: title,
            post: post,
            userID: userID,
            long: long,
            lat: lat
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
}

export default PostModel;