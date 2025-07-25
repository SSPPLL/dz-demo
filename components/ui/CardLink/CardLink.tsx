import { FC, ReactElement } from 'react'
import styles from './CardLink.module.scss'
import cn from 'classnames'
import { CardLinkProps } from './types'
import ArrowIcon from './arrow.svg'
import Link from 'next/link'

export const CardLink: FC<CardLinkProps> = ({
	children,
	className,
	...props
}): ReactElement => {
	return (
		<Link {...props} className={cn(styles.defaults, className)}>
			{children}
			<ArrowIcon width={20} height={20} />
		</Link>
	)
}