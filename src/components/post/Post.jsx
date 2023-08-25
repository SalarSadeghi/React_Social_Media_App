import { MoreVert } from "@mui/icons-material";
import "./post.css";

import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

function Post({ post }) {
  const [user, setUser] = useState({});

  const [like, setLike] = useState(post.likes);
  const [isLiked, setIsLike] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLike(!isLiked);
  };



  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/users/${post.userId}`);
        if (res.status === 200) {
          setUser(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [post.userId]);
  
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                src={user.profilePicture ? PF + user.profilePicture : `${PF}person/noAvatar.png`}
                alt=""
                className="postProfileImg"
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={PF + post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={`${PF}like.png`}
              alt=""
              className="likeIcon"
              onClick={likeHandler}
            />
            <img
              src={`${PF}heart.png`}
              alt=""
              className="heartIcon"
              onClick={likeHandler}
            />
            <span className="postLikeCounter">
              {like} people like it.
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
