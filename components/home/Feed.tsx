import type { NextPage } from 'next'
import { BsStar } from 'react-icons/bs'
import Post from '../Post'
import TweetBox from './TweetBox'

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d]`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const tweets = [
  {
    id: 1,
    displayName: 'John Doe',
    address: '0x1234567890123456789012345678901234567890',
    avatar: 'https://picsum.photos/id/237/200/200',
    text: 'Lorem ipsum dolor sit amet, cofficia deserunt mollit anim id est laborum.',
    isProfileImageNft: true,
    timestamp: '2022-02-01T00:00:00.000Z',
  },
  {
    id: 2,
    displayName: 'John Wick',
    address: '0x1234567890123456789012345678901234567890',
    avatar: 'https://picsum.photos/id/237/200/200',
    text: 'Lorem ipsum dolor sit amet, consect',
    isProfileImageNft: false,
    timestamp: '2022-01-01T00:00:00.000Z',
  },
  {
    id: 3,
    displayName: 'John Snow',
    address: '0x1234567890123456789012345678901234567890',
    avatar: 'https://picsum.photos/id/237/200/200',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullfficia deserunt mollit anim id est laborum.',
    isProfileImageNft: false,
    timestamp: '2021-06-01T00:00:00.000Z',
  },
]

const Feed: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStar />
      </div>
      <TweetBox />
      {tweets.map((tweet) => (
        <Post
          key={tweet.id}
          displayName={tweet.displayName}
          address={`${tweet.address.slice(0, 6)}...${tweet.address.slice(-4)}`}
          avatar={tweet.avatar}
          text={tweet.text}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  )
}

export default Feed
