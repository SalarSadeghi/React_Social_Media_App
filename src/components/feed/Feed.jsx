import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function Feed({ user }) {
  const [posts, setPosts] = useState([]);
  const {user:currentUser} = useContext(AuthContext)
  useEffect(() => {
    const getPost = async () => {
      try {
        const res = user
          ? await axios.get(`http://localhost:3001/posts?userId=${user.id}`)
          : await axios.get("http://localhost:3001/posts");
        if (res.status === 200) {
          setPosts(res.data.sort((p1,p2)=>{
            return new Date(p2.createdAt) - new Date(p1.createdAt)
          }));
          console.log("post fetched");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPost()
  }, [user]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {user.username === currentUser.username && <Share />}
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
