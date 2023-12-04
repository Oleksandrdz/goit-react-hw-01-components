import  FriendListItem  from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
const {
    friendList,
} = css;
const FriendList = ({ friends }) => {
    return (
        <ul className={friendList}>
            {friends.map((friend) => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    id={friend.id}
                />
            ))}
        </ul>
    );
};

export default FriendList;