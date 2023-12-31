import user from './user.json';
import data from './data.json';
import friends from './friends.json'
import transactions from'./transactions.json'
import {Profile} from './Profile/Profile.jsx';
import {Statistics} from './Statistics/Statistics';
import {FriendList} from './FriendList/FriendList';
import {TransactionHistory} from './TransactionHistory/TransactionHistory'
import css from './app.module.css'


export const App = () => {
  return (<div className={css.container}> <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
/>

    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
    
    </div>   
  );
};


