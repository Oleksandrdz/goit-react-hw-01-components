import css from "./FriendListItem.module.css";
const {
    item,
    status,
    statusBg0,
    statusBg1,
    styleAvatar,
    styleName,
} = css;
const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <li className={item}>
            <span className={`${ status } ${isOnline ?  statusBg1: statusBg0}`}>{isOnline}</span>
            <img className={styleAvatar} src={avatar} alt={ name} width="48" />
            <p className={styleName}>{name} </p>
        </li>
    )
}
export default FriendListItem;  