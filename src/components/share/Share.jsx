import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material'
import './share.css'
import { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
function Share() {
  const {user} = useContext(AuthContext)
  const [file,setFile] = useState(null)
  const descRef = useRef()
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
            <img src={user.profilePicture?PF+user.profilePicture:`${PF}person/noAvatar`} alt="" className="shareProfileImg" />
            <input ref={descRef} placeholder={`What's in your mind ${user.username}?`} className="shareInput" />
        </div>
        <hr className="shareHr" />
        <form className="shareButtom">
            <div className="shareOptions">
                <label className="shareOption" htmlFor='file'>
                    <PermMedia htmlColor='tomato' className='shareIcon'/>
                    <span className="shareOptinText">Photo or Video</span>
                    <input style={{display:"none"}} type="file" name="file" id="file" accept='.png,.jpeg,.jpg' onChange={e=>setFile(e.target.files[0])} />
                </label>
                <div className="shareOption">
                    <Label htmlColor='green' className='shareIcon'/>
                    <span className="shareOptinText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor='red' className='shareIcon'/>
                    <span className="shareOptinText">Locations</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor='gold' className='shareIcon'/>
                    <span className="shareOptinText">Feelings</span>
                </div>
            </div>
            <button className='shareBtn'>Share</button>
        </form>
      </div>
    </div>
  )
}

export default Share
