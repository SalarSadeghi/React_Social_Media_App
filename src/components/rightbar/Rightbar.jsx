import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Rightbar({ user }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            Some friends have a birthday today
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    const [friends, setFriends] = useState([]);
    console.log("hi");
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    useEffect(() => {
      const getFriends = async () => {
        try {
          const res = await axios.get("http://localhost:3001/users");
          if (res.status === 200) {
            setFriends(res.data.filter((friend) => friend.id !== user.id));
          }
        } catch (error) {
          console.log(error);
        }
      };
      getFriends();
    }, [user.id]);
    return (
      <>
        <h4 className="rightBarTitle">User information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">{user.city}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">{user.from}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Mariage status:</span>
            <span className="rightBarInfoValue">{user.relationship}</span>
          </div>
        </div>
        <h4 className="rightBarTitle">User friends</h4>
        <div className="rightBarFollowings">
          {friends.map((friend) => (
            <Link className="rightBarFollowing" to={`/profile/${friend.username}`} style={{textDecoration:"none", color:"black"}}>
              <div className="rightBarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? `${PF}${friend.profilePicture}`
                      : `${PF}person/noAvatar.png`
                  }
                  alt=""
                  className="rightBarFollowingImg"
                />
                <span className="rightBarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}

export default Rightbar;
