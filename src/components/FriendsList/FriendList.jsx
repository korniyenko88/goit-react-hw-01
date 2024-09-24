import FriendListItem from "./FriendListItem";
import styles from "./FriendsList.module.css";

const FriendList = ({ friends }) => {
    return (
      <ul className= {styles.friendslist}>
        {friends.map(friend => (
          <li className= {styles.friendslistitem} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    );
  };

  export default FriendList;