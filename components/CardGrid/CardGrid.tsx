import { ReactElement } from 'react';
import cn from 'classnames'
import styles from './CardGrid.module.scss'
import { CardGridProps } from './types';

export const CardGrid = ({
	children,
	className,
	...props
}: CardGridProps): ReactElement => {
	return (
		<ul className={cn(styles.defaults, className)} {...props}>
			{children}
		</ul>
	)
}