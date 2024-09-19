const Profile = (props) => {
    const { name, tag, location, image, stats } = props;
  
    return (
      <div class = "profile">
        <div>
          <img src={image} alt="User avatar" />
          <p class = "name">{name}</p>
          <p class = "tag">{tag}</p>
          <p class = "location">{location}</p>
        </div>
        
        <ul>
          <li>
            <span>Followers</span>
            <span>{stats.followers}</span>
          </li>
          <li>
            <span>Views</span>
            <span>{stats.views}</span>
          </li>
          <li>
            <span>Likes</span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Profile;