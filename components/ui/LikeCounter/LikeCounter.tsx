import { FC, ReactElement } from 'react'
import styles from './LikeCounter.module.scss'
import cn from 'classnames'
import { LikeCounterProps } from './types'
import { LikeIcon } from '../LikeIcon/LikeIcon'

export const LikeCounter: FC<LikeCounterProps> = ({
	children,
	className,
	...props
}): ReactElement => {
	return (
		<span {...props} className={cn(styles.defaults, className)}>
			<span className='visually-hidden'>Количество лайков: </span>{children}
			<LikeIcon aria-hidden={true} className={styles.icon} width={16} height={16} />
		</span>
	)
}