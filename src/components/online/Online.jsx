import './online.css'

function Online({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <>
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img
            src={PF+user.profilePicture}
            alt=""
            className="rightbarProfileImg"
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="righrbarUsername">{user.username}</span>
      </li>
    </>
  );
}

export default Online;