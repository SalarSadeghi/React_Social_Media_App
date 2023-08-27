import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { username } = useParams();
  console.log(username);
  console.log("feed ",user);
  useEffect(() => {
    const getUserByUsername = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/users?username=${username}`
        );
        if (res.status === 200) {
          setUser(res.data[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserByUsername();
  }, [username]);
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={user.coverPicture?`${PF}${user.coverPicture}`:`${PF}person/noCover.png`}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={user.profilePicture?`${PF}${user.profilePicture}`:`${PF}person/noAvatar.png`}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">
                {user.desc || "Hello everyone. This is my profile."}
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed user={user}/> 
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
