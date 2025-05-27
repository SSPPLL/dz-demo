import { ReactElement } from 'react'
import styles from './LikeCounter.module.scss'
import cn from 'classnames'
import { LikeCounterProps } from './types'
import LikeIcon from './like.svg'

export const LikeCounter = ({
	children,
	className,
	...props
}: LikeCounterProps): ReactElement => {
	return (
		<span {...props} className={cn(styles.defaults, className)}>
			{children}
			<LikeIcon width={16} height={16} />
		</span>
	)
}