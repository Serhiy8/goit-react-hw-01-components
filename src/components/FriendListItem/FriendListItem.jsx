import PropTypes from 'prop-types';
import css from './friendListItem.module.css'


export const FriendListItem = ({avatar, name, isOnline}) => {
    return <li className={css.item}>
        <div className={css.statusContainer}>{isOnline ? <span className={css.statusOn}></span> : <span className={css.statusOff}></span>}</div>
        <div className={css.friendAvatar}><img  src={avatar} alt={name} width="48" /></div>
        <p className={css.friendName}>{name}</p>
  </li>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
