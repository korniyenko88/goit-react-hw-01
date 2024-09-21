import "./Profile.css";

const Profile = (props) => {
    const { name, tag, location, image, stats } = props;
  
    return (
      <div className = "profile">
        <div>
          <img className="profile-img" src={image} alt="User avatar" />
          <p className = "profile-name">{name}</p>
          <p className = "profile-tag">{tag}</p>
          <p className = "profile-location">{location}</p>
        </div>
        
        <ul className="profile-list">
          <li className="profile-list-item">
            <span>Followers</span>
            <span>{stats.followers}</span>
          </li>
          <li className="profile-list-item">
            <span>Views</span>
            <span>{stats.views}</span>
          </li>
          <li className="profile-list-item">
            <span>Likes</span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Profile;