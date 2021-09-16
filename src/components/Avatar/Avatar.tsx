import { FC } from 'react'
import { IAvatarProps } from './Types'
import './Avatar.scss'
const Avatar: FC<IAvatarProps> = ({ imageUrl }) => {
  return (
    <img
      src={imageUrl}
      alt="profile avatar"
      width={50}
      height={50}
      className="avatar"
    />
  )
}

export default Avatar
