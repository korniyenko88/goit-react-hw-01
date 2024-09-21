const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <div>
        <img src={avatar} alt="Avatar" width="48" />
        <p className="friends-text">{name}</p>
        <p className="friends-text" style={{ color: isOnline ? 'green' : 'red' }}>
          {isOnline ? 'Online' : 'Offline'}
        </p>
      </div>
    );
  };

  export default FriendListItem;