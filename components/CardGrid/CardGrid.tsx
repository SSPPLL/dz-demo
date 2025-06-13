import { FC, ReactElement } from 'react';
import cn from 'classnames'
import styles from './CardGrid.module.scss'
import { CardGridProps } from './types';

export const CardGrid: FC<CardGridProps> = ({
	children,
	className,
	...props
}): ReactElement => {
	return (
		<ul className={cn(styles.defaults, className)} {...props}>
			{children}
		</ul>
	)
}