import { FC, ReactElement } from 'react'
import { LikeIconProps } from './types'
import LikeIconImage from './like.svg'

export const LikeIcon: FC<LikeIconProps> = ({ viewBox, ...props }): ReactElement => {
	return (<LikeIconImage {...props} viewBox={viewBox || '0 0 16 16'} />)
}