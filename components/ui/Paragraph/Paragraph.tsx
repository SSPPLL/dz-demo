import { ReactElement } from 'react'
import styles from './Paragraph.module.scss'
import cn from 'classnames'
import { ParagraphProps } from './types'

export const Paragraph = ({
	size = 'md',
	color = 'light',
	children,
	className,
	...props
}: ParagraphProps): ReactElement => {
	return (
		<p {...props} className={cn(styles[size], styles[color], className)}>
			{children}
		</p>
	)
}