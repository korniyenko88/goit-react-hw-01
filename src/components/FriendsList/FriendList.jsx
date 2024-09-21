import FriendListItem from "./FriendListItem";
import "./FriendsList.css";

const FriendList = ({ friends }) => {
    return (
      <ul className="friends-list">
        {friends.map(friend => (
          <li className="friends-list-item" key={friend.id}>
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