import type { NextPage } from 'next'
import { format } from 'timeago.js'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { FaRegComment, FaRetweet } from 'react-icons/fa'
import { FiShare } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'

const style = {
  wrapper: `flex p-3 border-b border-[#38444d]`,
  profileImage: `rounded-full h-[40px] w-[40px] object-cover`,
  postMain: `flex-1 px-4`,
  headerDetails: `flex items-center`,
  name: `font-bold mr-1`,
  verified: `text-[0.8rem]`,
  handleAndTimeAgo: `text-[#8899a6] ml-1`,
  tweet: `my-2`,
  image: `rounded-3xl`,
  footer: `flex justify-between mr-28 mt-4 text-[#8899a6]`,
  footerIcon: `rounded-full text-lg p-2`,
}

type Props = {
  key: number
  displayName: string
  address: string
  avatar: string
  text: string
  isProfileImageNft: boolean
  timestamp: string
}

const Post: NextPage<Props> = ({
  key,
  displayName,
  address,
  avatar,
  text,
  isProfileImageNft,
  timestamp,
}) => {
  return (
    <div className={style.wrapper}>
      <div>
        <img
          src={avatar}
          alt={displayName}
          className={
            isProfileImageNft
              ? `${style.profileImage} smallHex`
              : style.profileImage
          }
        />
      </div>
      <div className={style.postMain}>
        <div>
          <span className={style.headerDetails}>
            <span className={style.name}>{displayName}</span>
            {isProfileImageNft && (
              <span>
                <BsFillPatchCheckFill />
              </span>
            )}
          </span>
          <span className={style.handleAndTimeAgo}>
            @{address} · {format(timestamp)}
          </span>
          <div className={style.tweet}>{text}</div>
          <div className={style.footer}>
            <div
              className={`${style.footerIcon} hover:bg-[#1e364a] hover:text-[#1d9bf0]`}
            >
              <FaRegComment />
            </div>
            <div
              className={`${style.footerIcon} hover:bg-[#1b393b] hover:text-[#03ba7c]`}
            >
              <FaRetweet />
            </div>
            <div
              className={`${style.footerIcon} hover:bg-[#39243c] hover:text-[#f91c80]`}
            >
              <AiOutlineHeart />
            </div>
            <div
              className={`${style.footerIcon} hover:bg-[#1e364a] hover:text-[#1d9bf0]`}
            >
              <FiShare />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
