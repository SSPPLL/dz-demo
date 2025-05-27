import { ReactElement } from 'react'
import styles from './InfoList.module.scss'
import cn from 'classnames'
import { InfoListProps } from './types'
import { Info, LikeCounter } from '../ui'

export const InfoList = ({
	className,
	items,
	...props
}: InfoListProps): ReactElement => {
	return (
		<div {...props} className={cn(styles.defaults, className)}>
			{items.map(({ className, likes, ...itemProps }, index) => {
				if (likes) {
					return (<LikeCounter key={index} {...itemProps} className={cn(styles.item, className)} />)
				}

				return (<Info key={index} {...itemProps} className={cn(styles.item, className)} />)
			})}
		</div>
	)
}