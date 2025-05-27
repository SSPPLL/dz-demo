import { ReactElement } from 'react'
import styles from './Info.module.scss'
import cn from 'classnames'
import { InfoProps } from './types'

export const Info = ({
	color = 'light',
	children,
	className,
	...props
}: InfoProps): ReactElement => {
	return (
		<span {...props} className={cn(styles.defaults, styles[color], className)}>
			{children}
		</span>
	)
}