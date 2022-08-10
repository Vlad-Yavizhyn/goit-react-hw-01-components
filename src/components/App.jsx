import {Profile} from './profile/Profile'
import {Statistics} from './statistics/statistics'
import {FriendList} from './friendList/friendList'
import {TransactionHistory} from './transaction/TransactionHistory'

import user from './profile/user.json'
import statistics from './statistics/data'
import friends from './friendList/friends.json'
import transactions from './transaction/transactions.json'


export const App = () => {
  return (
  <>
  <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
  <Statistics statistics={statistics} title="Upload stats" />
  <FriendList friends={friends} />
  <TransactionHistory items={transactions} />
  </>
  )}