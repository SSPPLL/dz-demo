import { ReactElement } from 'react'
import { LikeIconProps } from './types'
import LikeIconImage from './like.svg'

export const LikeIcon = ({ viewBox, ...props }: LikeIconProps): ReactElement => {
	return (<LikeIconImage {...props} viewBox={viewBox || '0 0 16 16'} />)
}