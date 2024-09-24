import styles from "./FriendsList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <div>
        <img src={avatar} alt="Avatar" width="48" />
        <p className= {styles.friendstext}>{name}</p>
        <p className= {styles.friendstext} style={{ color: isOnline ? 'green' : 'red' }}>
          {isOnline ? 'Online' : 'Offline'}
        </p>
      </div>
    );
  };

  export default FriendListItem;