import { ReactElement } from 'react'
import styles from './LikeCounter.module.scss'
import cn from 'classnames'
import { LikeCounterProps } from './types'
import { LikeIcon } from '../LikeIcon/LikeIcon'

export const LikeCounter = ({
	children,
	className,
	...props
}: LikeCounterProps): ReactElement => {
	return (
		<span {...props} className={cn(styles.defaults, className)}>
			{children}
			<LikeIcon className={styles.icon} width={16} height={16} />
		</span>
	)
}