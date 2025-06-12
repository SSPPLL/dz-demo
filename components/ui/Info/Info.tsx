import { FC, ReactElement } from 'react'
import styles from './Info.module.scss'
import cn from 'classnames'
import { InfoProps } from './types'

export const Info: FC<InfoProps> = ({
	color = 'light',
	children,
	className,
	...props
}): ReactElement => {
	return (
		<span {...props} className={cn(styles.defaults, styles[color], className)}>
			{children}
		</span>
	)
}