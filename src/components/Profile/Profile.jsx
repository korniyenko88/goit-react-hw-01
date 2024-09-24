import styles from "./Profile.module.css";

const Profile = (props) => {
  const { name, tag, location, image, stats } = props;

  return (
    <div className={styles.profile}>
      <div>
        <img className={styles.img} src={image} alt="User avatar" />
        <p className={styles.profilename}>{name}</p>
        <p className={styles.profiletag}>{tag}</p>
        <p className={styles.profilelocation}>{location}</p>
      </div>
      
      <ul className={styles.profilelist}>
        <li className={styles.profilelistitem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.profilelistitem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles.profilelistitem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;