import PropTypes from 'prop-types';
import css from './friendList.module.css'
import {FriendListItem} from "./FriendListItem"

export const FriendList =({friends}) => {
   return <ul className={css.friendList}>
        {friends.map(({avatar, name, isOnline, id}) =>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />)}
    </ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
          }).isRequired,
    )
}
