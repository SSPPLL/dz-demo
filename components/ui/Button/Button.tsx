import { ElementType, ReactElement } from 'react'
import { ButtonProps, ButtonAllowedTags } from './types'
import styles from './Button.module.scss'
import cn from 'classnames'

export const Button = <T extends ButtonAllowedTags>({
	as,
	children,
	className,
	...props
}: ButtonProps<T>): ReactElement => {
	const Tag = (as || 'button') as ElementType;
	return (
		<Tag {...props} className={cn(styles.button, className)}>
			{children}
		</Tag>
	)
}