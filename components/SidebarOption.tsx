import type { NextPage } from 'next'
import { redirect } from 'next/dist/server/api-utils'
import { Router, useRouter } from 'next/router'

const style = {
  wrapper: `w-min flex items-center rounded-[100px] p-4 cursor-pointer hover:bg-[#333c45] transition-all hover:duration-200 hover:ease-in-out`,
  iconContainer: `text-xl mr-4`,
  textGeneral: `font-medium`,
  textActive: `font-bold`,
}

type Props = {
  text: string
  Icon: any
  isActive: boolean
  setSelected: (text: string) => void
  redirect: string
}

const SidebarOption: NextPage<Props> = ({
  text,
  Icon,
  isActive,
  setSelected,
  redirect,
}) => {
  const router = useRouter()

  return (
    <div
      className={style.wrapper}
      onClick={() => {
        setSelected(text)
        router.push(redirect)
      }}
    >
      <div className={style.iconContainer}>
        <Icon />
      </div>
      <div className={`${isActive ? style.textActive : style.textGeneral}`}>
        {text}
      </div>
    </div>
  )
}

export default SidebarOption
