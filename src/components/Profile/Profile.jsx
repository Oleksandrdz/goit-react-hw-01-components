import css from './Profile.module.css';
const {
  profile,
  userFoto,
  description,
  name,
  tagStyle,
  locationStyle,
  statsStyle,
  quantity,
} = css;

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={profile}>
        <div className={description}>
            <img src={avatar} alt={username} className={userFoto}/>
        <p className={name}>{username}</p>
            <p className={tagStyle}>@{tag}</p>
            <p className={locationStyle}>{ location}</p>
        </div>
      
        <ul className={statsStyle}>
          <li>
            <span>Followers:</span>
          <span className={quantity}>{stats.followers}</span>
          </li>
          <li>
            <span>Views:</span>
            <span className={quantity}>{stats.views}</span>
          </li>
          <li>
            <span>Likes:</span>
            <span className={quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
  );
};
  
export default Profile;