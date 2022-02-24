import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { VscTwitter } from 'react-icons/vsc'
import { RiHome7Line, RiHome7Fill } from 'react-icons/ri'
import { BiHash } from 'react-icons/bi'
import { FiBell } from 'react-icons/fi'
import {
  BsBookmarkFill,
  BsBookmark,
  BsPersonFill,
  BsPerson,
} from 'react-icons/bs'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import { FaRegListAlt, FaHashtag, FaBell } from 'react-icons/fa'
import { CgMoreO } from 'react-icons/cg'
import SidebarOption from './SidebarOption'

const style = {
  wrapper: `flex-[0.7] px-8 flex flex-col`,
  twitterIconContainer: `text-3xl m-4`,
  tweetButton: `bg-[#1d9bf0] hover:bg-[#1a8ae2] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
  navContainer: `flex-1`,
  profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#1a8ae2]`,
  profileLeft: `flex items-center justify-center mr-4`,
  profileImage: `height-12 w-12 rounded-full`,
  profileRight: `flex items-center justify-center`,
  details: `flex-1`,
  name: `font-bold text-lg`,
  handle: `text-sm text-[#8899a6]`,
  moreContainer: `flex items-center justify-center mr-2`,
}

type Props = {
  initialSelectedIcon: string
}

const Sidebar: NextPage<Props> = ({ initialSelectedIcon = 'Home' }) => {
  const [selected, setSelected] = useState(initialSelectedIcon)

  return (
    <div className={style.wrapper}>
      <div className={style.twitterIconContainer}>
        <VscTwitter />
      </div>
      <div className={style.navContainer}>
        <SidebarOption
          text="Home"
          Icon={selected === 'Home' ? RiHome7Fill : RiHome7Line}
          isActive={Boolean(selected === 'Home')}
          setSelected={setSelected}
          redirect={'/'}
        />
        <SidebarOption
          text="Explore"
          Icon={selected === 'Explore' ? FaHashtag : BiHash}
          isActive={Boolean(selected === 'Explore')}
          setSelected={setSelected}
          redirect={'/explore'}
        />
        <SidebarOption
          text="Notifications"
          Icon={selected === 'Notifications' ? FaBell : FiBell}
          isActive={Boolean(selected === 'Notifications')}
          setSelected={setSelected}
          redirect={'/explore'}
        />
        <SidebarOption
          text="Messages"
          Icon={selected === 'Messages' ? HiMail : HiOutlineMail}
          isActive={Boolean(selected === 'Messages')}
          setSelected={setSelected}
          redirect={'/explore'}
        />
        <SidebarOption
          text="Bookmarks"
          Icon={selected === 'Bookmarks' ? BsBookmarkFill : BsBookmark}
          isActive={Boolean(selected === 'Bookmarks')}
          setSelected={setSelected}
          redirect={'/explore'}
        />
        <SidebarOption
          text="Profile"
          Icon={selected === 'Profile' ? BsPersonFill : BsPerson}
          isActive={Boolean(selected === 'Profile')}
          setSelected={setSelected}
          redirect={'/profile'}
        />
        <SidebarOption
          text="More"
          Icon={CgMoreO}
          isActive={Boolean(selected === 'More')}
          setSelected={() => {}}
          redirect={'/more'}
        />
        <div className={style.tweetButton}>Mint</div>
      </div>
      <div className={style.profileButton}>
        <div className={style.profileLeft}></div>
        <div className={style.profileRight}>
          <div className={style.details}>
            <div className={style.name}> Abhishek Patel </div>
            <div className={style.handle}> @abhishekpatel </div>
          </div>
          <div className={style.moreContainer}>
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
